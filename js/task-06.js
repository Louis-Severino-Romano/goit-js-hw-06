const inputField = document.getElementById('validation-input');

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
    
  };
