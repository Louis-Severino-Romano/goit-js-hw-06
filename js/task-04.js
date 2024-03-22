let addBtn=document.querySelector('[data-action="increment"]');
let minusBtn=document.querySelector('[data-action="decrement"]');
let initialValue=0;

let value=document.getElementById('value');
value.innerText=initialValue;
addBtn.addEventListener('click', function(){
    initialValue += 1;
    value.innerText=initialValue;
})

minusBtn.addEventListener('click', function(){
    initialValue -=1;
    value.innerText=initialValue;
})
