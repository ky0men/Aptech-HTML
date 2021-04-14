function show(){
    var userName = document.getElementById("namejs").value;
    var email = document.getElementById("emailjs").value;
    var phone = document.getElementById("phonejs").value;
    var address = document.getElementById("addressjs").value;
    var skype = document.getElementById("skypejs").value;

    info = 'Tên: ' + userName + '<br>';
    info += 'Email: ' + email + '<br>';
    info += 'Số điện thoại: ' + phone + '<br>';
    info += 'Địa chỉ: ' + address + '<br>';
    info += 'Skype: ' + skype + '<br>';

    document.getElementById("result").innerHTML = info;
}

