let addBtn=document.querySelector('[data-action="increment"]');
let minusBtn=document.querySelector('[data-action="decrement"]');
let initialValue=0;

let value=document.getElementById('value');
value.innerText=initialValue;
addBtn.onclick = function(){
    initialValue += 1;
    value.innerText=initialValue;
}

minusBtn.onclick = function(){
        initialValue -=1;
        value.innerText=initialValue;
   }