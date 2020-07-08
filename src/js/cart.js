$(document).ready(function() {
    $.ajax({
    url :"../interface/showlist.php",//请求地址
    dataType : "json",//数据格式
    type : "post",//请求方式
    async : false,//是否异步请求
    success : function(res ) { //如何发送成功 
            var htmls ="";
        //   console.log(res.data);
            var sum =0;
        for(var i=0;i<res.data.length;i++){ //遍历data数组  
             var ls = res.data[i];  
       
         htmls += "<div class='item-box'><div class='item-table'><div class='goods-id'>"+ls.product_id+"</div> <div class='goods-img' > <img src='"+ls.product_img+"' ></div> <div class='goods-name'><h3>"+ls.product_name+"</h3></div> <div class='goods-price'>"+ls.product_price+"</div> <div class='goods-num'> <div class='change-goods-num'> <p>-</p> <span>"+ls.product_num+"</span>    <p>+</p>  </div> </div>  <div class='goods-total'>"+(ls.product_num * ls.product_price)+"</div>   <div class='goods-action'><span>X</span> </div></div></div>";   
          sum+=ls.product_num * ls.product_price;
        }    
      
        $('.list-body').html(htmls); 
        $('.cart-total  i').text(res.data.length);
        $('.total-price  em').text(sum);
        $('.goods-num  p').click(fn);
        $('.goods-action span').click(fn1);
    }
    
  });
})
// 点击增加/删除
     function fn(){
       
       var  this_id=  $(this).parent().parent().parent().find('.goods-id').text();
       var   num  =$(this).parent().find('span').text(); 
       var   price = parseInt($(this).parent().parent().parent().find('.goods-price').text());
       var  sum= parseInt($('.total-price  em').text())  ;
         
       
         
        
       
      var that =this;

    if(($(this).text())=="-"){  //根据点击得按钮判断增加 删除
          
          if(num<=1){             
            alert("商品数目不能少于1")
          }else{
               $.get('../interface/updatewq.php',{
                 id:this_id,
                 type:'cut'
             },function(data){            
                var json = JSON.parse(data);
                if(json.code==1){ 
                    num--;    
                    $(that).next().text(num);
                    var  tal= num*price;
                     $(that).parent().parent().parent().find('.goods-total').text(tal);
                      sum-=price;
                     
                     
                     $('.total-price  em').text(sum);
                }  
             })
          }
            
        }else{   
            $.get('../interface/updatewq.php',{
                id:this_id,
                type:'add'
            },function(data){                        
               var json = JSON.parse(data);
               if(json.code==1){ 
                   num++;    
                   $(that).prev().text(num);   
                   var  tal= num*price;
                    $(that).parent().parent().parent().find('.goods-total').text(tal);    
                    sum+=price;
                    $('.total-price  em').text(sum);
               }  
            })
        }
          
          
     }

    //  删除

    function fn1(){
          var this_id=  $(this).parent().parent().find('.goods-id').text();
          var   num   = $(this).parent().next().next().children().find('span').text();
          var   price = parseInt($(this).parent().parent().parent().find('.goods-price').text()) ;
          var   count=$('.cart-total  i').text();
          var  sum=  parseInt( $('.total-price  em').text());

             console.log(sum);
             console.log(num);
             console.log(price);
             
             
      
          var  that =this;
           
          
          $.get('../interface/delwq.php',{
               id:this_id
          },function(data){
            var json = JSON.parse(data);
            if(json.code==1){
                alert('商品删除成功');
                
                // $(that).parent().parent().parent().remove();
                 count--;
                  

                 var  cha=num*price;
                 sum1=sum-cha;
                 console.log('1'+sum1);
                 
                 var sum2 = sum-(num*price);

                  console.log(sum2);
                  
                $('.cart-total  i').text(count);
                // $('.total-price  em').text(sum);
                
             }
          })  
    }


 