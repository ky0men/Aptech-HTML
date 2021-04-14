function validate(){
    var userName = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var rePassword = document.getElementById('repassword').value;

    if (userName ==''){
        alert('Hãy nhập User')
    }else if (password == ''){
        alert('Hãy nhập Password')
    }else if (rePassword == ''){
        alert('Hãy nhập Re-Password')
    }else if (password !== rePassword){
        alert('Password và Re-Password khác nhau. Hãy nhập lại!')
    } else{
        alert('Cám ơn bạn đã đăng ký thàng công!')
    }
        
}