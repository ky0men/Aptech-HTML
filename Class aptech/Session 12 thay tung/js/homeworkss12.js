function sumFunction(){
    var a = prompt('Hãy nhập số đầu tiên', 0);
    var b = prompt('Hãy nhập số thứ hai', 0);
    var c = prompt('Hãy nhập số thứ 3', 0);
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)){
        var d = Number(a) + Number(b) + Number(c);
        document.getElementById('export-area').innerHTML = 
        'Tổng ba số a + b + c là: ' + d;
    } else{
        document.getElementById('export-area').innerHTML =
        'Hãy nhập số! đừng nhập bậy bạn êi'
    }
}

function sumAverageFunction(){
    var a = prompt('Hãy nhập số đầu tiên', 0);
    var b = prompt('Hãy nhập số thứ hai', 0);
    var c = prompt('Hãy nhập số thứ 3', 0);
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)){
        var d = (Number(a) + Number(b) + Number(c))/3;
        document.getElementById('export-area').innerHTML = 
        'Trung bình cộng ba số a + b + c là: ' + d;
    } else{
        document.getElementById('export-area').innerHTML =
        'Hãy nhập số! đừng nhập bậy bạn êi'
    }
    
}
function sCircle(){
    var r = prompt('Hãy nhập bán kính hình tròn', 0);
    var Pi = 3.14;
    if (!isNaN(r)){
        var s = Number(r)**2*Pi;
        document.getElementById('export-area').innerHTML = 
        'Diện tích hình tròn có bán kính bằng ' + r + ' là: ' + s;
    } else{
        document.getElementById('export-area').innerHTML =
        'Hãy nhập số! đừng nhập bậy bạn êi'
    }
    
}
function sParallelogram(){
    var a = prompt('Hãy nhập cạnh a', 0);
    var b = prompt('Hãy nhập cạnh b', 0);
    var h = prompt('Hãy nhập chiều cao h', 0);
    if (!isNaN(a) && !isNaN(b) && !isNaN(h)){
        if (h < a && a < b){
            var s = Number(h)*Number(b);
            document.getElementById('export-area').innerHTML = 
            'Diện tích hình bình hành là: ' + s;
        }else if(a < h && h < b){
            var s = Number(h) * Number(a);
            document.getElementById('export-area').innerHTML = 
            'Diện tích hình bình hành là: ' + s;
        }
        
    }else{
        document.getElementById('export-area').innerHTML =
        'Hãy nhập số! đừng nhập bậy bạn êi'
    }
    
}
function volumetric(){
    var a = prompt('Hãy nhập cạnh đầu tiên', 0);
    var b = prompt('Hãy nhập cạnh thứ hai', 0);
    var c = prompt('Hãy nhập cạnh thứ 3', 0);
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)){
        var d = Number(a) * Number(b) * Number(c);
        document.getElementById('export-area').innerHTML = 
        'Thể tích hình hộp chữ nhật có 3 cạnh a, b, c là: ' + d;
    } else{
        document.getElementById('export-area').innerHTML =
        'Hãy nhập số! đừng nhập bậy bạn êi'
    }
    
}
function price(){
    var a = prompt('Hãy nhập số lượng', 0);
    var b = prompt('Hãy nhập đơn giá sản phẩm', 0);
    
    if (!isNaN(a) && !isNaN(b)){
        var d = Number(a) * Number(b) * 0.9;
        document.getElementById('export-area').innerHTML = 
        'Giá tiền cần trả của khách sau khi đã được giảm 10% là: ' + d;
    } else{
        document.getElementById('export-area').innerHTML =
        'Hãy nhập số! đừng nhập bậy bạn êi'
    }
    
}
function change(){
    var a = prompt('Hãy nhập số a', 0);
    var b = prompt('Hãy nhập số b', 0);
    
    if (!isNaN(a) && !isNaN(b)){
        a = Number(a) + Number(b);
        b = Number(a) - Number(b);
        a = Number(a) - Number(b)
        document.getElementById('export-area').innerHTML = 
        'Hoán đổi vị trí a và b: a = ' + a + ' , ' + 'b = ' + b;
    } else{
        document.getElementById('export-area').innerHTML =
        'Hãy nhập số! đừng nhập bậy bạn êi'
    }
    
}