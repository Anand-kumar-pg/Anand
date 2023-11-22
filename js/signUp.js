function validateForm(e){
  e.preventDefault();
  var name = document.getElementById('name').value;
  var Email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  console.log("Full name :" + name);
  console.log("Email :" + Email);
  console.log("password :" + password);

  if(name == null || name == ''){
    let FirstNameError = document.getElementById('FirstNameError');
    FirstNameError.innerHTML = "please enter your first name"
    FirstNameError.style.display = 'block';
    return false;
  }

  if(Email == null || Email == ''){
    let emailerror = document.getElementById('emailerror');
    emailerror.innerHTML = "please enter your email"
    emailerror.style.display = 'block';
    return false;
  }

  if(password == null || password == ''){
    let passworderror = document.getElementById('passworderror');
    passworderror.innerHTML = "please enter your password"
    passworderror.style.display = 'block';
    return false;
  }

  alert("CONGRATULATION");



}
  
  