document.querySelector('#myform').addEventListener('submit', function(event) {
  document.querySelector('#fNameError').textContent = '';
  document.querySelector('#lNameError').textContent = '';
  document.querySelector('#emailError').textContent = '';
  document.querySelector('#passwordError').textContent = '';

  var fname = document.querySelector('#fname').value;
  if (fname.trim() === '') {
    document.querySelector('#fNameError').textContent = 'First Name cannot be empty';
    document.querySelector('#fname').style.background = "url('./images/icon-error.svg') no-repeat";
    document.querySelector('#fname').style.backgroundPosition = "95%";
    event.preventDefault();
  }

  var lname = document.querySelector('#lname').value;
  if (lname.trim() === '') {
    document.querySelector('#lNameError').textContent = 'Last Name cannot be empty';
    document.querySelector('#lname').style.background = "url('./images/icon-error.svg') no-repeat";
    document.querySelector('#lname').style.backgroundPosition = "95%";
    event.preventDefault();
  }

  var email = document.querySelector('#email').value;
  if (email.trim() === '') {
    document.querySelector('#emailError').textContent = 'Looks like this is not an email';
    document.querySelector('#email').style.background = "url('./images/icon-error.svg') no-repeat";
    document.querySelector('#email').style.backgroundPosition = "95%";
    event.preventDefault();
  }

  var password = document.querySelector('#password').value;
  if (password.trim() === '') {
    document.querySelector('#passwordError').textContent = 'Password cannot be empty';
    document.querySelector('#password').style.background = "url('./images/icon-error.svg') no-repeat";
    document.querySelector('#password').style.backgroundPosition = "95%";
    event.preventDefault();
  }
});
