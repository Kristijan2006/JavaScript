let inputs=document.getElementById('Inputs').children;
let submitBtn=document.getElementById('submit');
let result=document.getElementById('result');

function getUserInfo(inputElements){
    let result='User:' ;
    for  (let input of inputElements) {
        result += input.value + ' ';
    }
result+= 'is registered'
return result;

}

submitBtn.addEventListener('click',function(){
    result.innerText = getUserInfo(inputs);
}
)
