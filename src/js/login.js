     var btn =document.querySelector('.btn')
     var user = document.getElementById('username')
     var word = document.getElementById('password')
     
     //绑定事件
     btn.onclick = function(){
          
        var username = user.value;
        var password = word.value;

        console.log(username);
        console.log(password);
        
        
        //创建ajax对象k
        var xhr = new XMLHttpRequest();
        //初始化
        xhr.open('post','../interface/login.php')
        //设置请求头
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
        //发送请求主体
        xhr.send("username="+username+"&password="+password)
        //等待响应完成
        xhr.onload =function(){
            if(xhr.readyState==4&&xhr.status==200){
                console.log(xhr.responseText)
                if(xhr.responseText == 1){
                    window.location.href="./index.html" 
                }else{
                    alert('账号或密码不正确！')
                }
            } 
        }
    }


 