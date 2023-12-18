const togglePassword =  
        document.querySelector('#togglePassword'); 
          
    const password = document.querySelector('#password'); 
  
    togglePassword.addEventListener('click', function (e) { 
  
        // Toggle the type attribute 
        const type = password.getAttribute( 
            'type') === 'password' ? 'text' : 'password'; 
        password.setAttribute('type', type); 
  
        // Toggle the eye slash icon 
        if (togglePassword.src.match( 
"https://img.icons8.com/?size=24&id=96181&format=png")) {  
            togglePassword.src = 
"https://img.icons8.com/?size=24&id=85028&format=png"; 
        } else { 
            togglePassword.src = 
"https://img.icons8.com/?size=24&id=85028&format=png"; 
        } 
    }); 










