
$('.btn').click(function(){

    console.log($('#username').val())
    $.ajax({
        url:'../interface/register.php',
        type:'post',
        // dataType:'josn',
        data:{
            username:$('#username').val(),
            password:$('#password').val()
        },
        success:function(data){
            var a = JSON.parse(data)
            console.log(a.code)
            if(a.code==1){
                window.location.href='./login.html'
            }else{
                alert('注册失败,用户名已被占用;请重新注册')
            }
        }
    })
})