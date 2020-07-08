 var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 横向切换选项
    loop: true, // 循环模式选项
    effect : 'fade',//淡入淡出
    speed:800,
    autoplay: {
      delay:3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },//自动轮播
    // 如果需要分页器
    pagination :{
      el: '.swiper-pagination',
      clickable :true,
    //   bulletClass : 'my-bullet',
    //   bulletActiveClass: 'my-bullet-active',
  },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  })   
  for(i=0;i<mySwiper.pagination.bullets.length;i++){
      mySwiper.pagination.bullets[i].onclick=function(){
      this.click();
      };
  }
  


 $('.sale-btn').click(function(){
   $.ajax({
     url:'../interface/addwq.php',
     data:{
       id:3000,
       img:"../images/dianfanguo.jpg",
       price:288,
       name:"电饭锅"
     },
     dataType:'json',

     success:function(data){
     
         
           if(data.code){
                   window.location.href='./cart.html' 
           }else{
            alert("添加购物车失败，请重新添加");
             
           }
     }
   })
 })
 
  
      
