let arr = [];
function clear(){
    arr = [];    
    document.querySelector(".sortArr").innerHTML= "";
    document.querySelector('.sum').innerHTML ="";
}
function sumInput() {    
    document.querySelector(".sortArr").innerHTML = arr.sort((a, b) => a-b);
    let filteredArr = arr.filter(Boolean);
    function count(filteredArr) {
    let sum = 0;
    filteredArr.forEach(function(item){
        sum +=item
    })
    return sum;
    }
    count(filteredArr);
    document.querySelector('.sum').innerHTML = `Сумма: ${count(filteredArr)}`;    
}
    

function saveValue() {  
    let input = document.querySelector('input').value;
    if (!input ||input.charAt(0) === ' '|| !isFinite(input)){
    sumInput();
    }    
    arr.push(+input);    
}
sumInput();