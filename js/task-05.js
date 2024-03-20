
const inputField = document.getElementById('name-input');

  inputField.oninput=function() {
    const inputValue = inputField.value.trim();
    let yourName=document.getElementById('name-output');
console.log(yourName);
   if(!(inputValue==='')){
    yourName.innerText=inputValue;
   }
   else{
    yourName.innerText='Anonymous';
   }
    
    
  };
