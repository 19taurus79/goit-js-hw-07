const form = document.querySelector('.login-form');
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (email.value === '' || password.value === '') {
    return alert('All form fields must be filled in');
  }
  const formElements = event.target.elements;
  const formArr = {
    [formElements['email'].name]: formElements['email'].value.trim(),
    [formElements['password'].name]: formElements['password'].value.trim(),
  };
  console.log(formArr);
  form.reset();
});
