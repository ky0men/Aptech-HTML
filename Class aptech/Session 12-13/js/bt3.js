
function solve(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;

    

    if (isNaN(1/a) || isNaN(1/b)){
        document.getElementById('result').innerHTML = 
        'Hãy nhập số! đừng nhập bậy bạn êi.'
        
    } else{
        if (a != 0 && b != 0){
            document.getElementById('result').innerHTML = 
            `Phương trình ${a}x + ${b} = 0 có nghiệm x= -${b/a}. `
        }
        if (a == 0 && b == 0){
            document.getElementById('result').innerHTML = 
            `Phương trình ${a}x + ${b} = 0 có vô số nghiệm. `
        }
        if (a == 0 && b != 0){
            document.getElementById('result').innerHTML = 
            `Phương trình ${a}x + ${b} = 0 vô nghiệm. `
        }
    
        if (a != 0 && b == 0){
            document.getElementById('result').innerHTML = 
            `Phương trình ${a}x + ${b} = 0 có nghiệm x = 0. `
        }
    }

    
}