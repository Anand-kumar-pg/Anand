
function validateForm(e) {
    e.preventDefault();
    var email = document.getElementById('Email').value;
    var password = document.getElementById('exampleInputPassword1').value;
    console.log("Email :" + email);
    console.log("password :" + password);


    if(email == null || email == ''){
        let emailerror = document.getElementById('emailerror');
        emailerror.innerHTML = "please enter your email or phonenumber"
        emailerror.style.display = 'block';
        return false;
        
    }

    if(password == null || password == ''){
        let passworderror = document.getElementById('passworderror');
        passworderror.innerHTML = "please enter your password"
        passworderror.style.display = 'block';
        return false;
        
    }
    

    alert("Welcome to Mostudio");
}
