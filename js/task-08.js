let form=document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
    
    const data = {
        email: email,
        password: password
      };
  
      console.log('Form Data:', data);
  
      form.reset();
    });

