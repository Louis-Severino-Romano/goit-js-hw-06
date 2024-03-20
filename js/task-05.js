
const inputField = document.getElementById('name-input');

  inputField.onblur=function() {
    const inputValue = inputField.value.trim();
    const textLength=parseInt(inputField.getAttribute('data-length'),10)
    
    if (textLength===inputValue.length){
        inputField.classList.remove("invalid");
        inputField.classList.add("valid")
    }
    else{
        inputField.classList.remove("valid");
        inputField.classList.add("invalid");
    }
    let yourName=document.getElementById('name-output');
    yourName.innerText=inputValue;
  };
