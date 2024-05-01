document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.getElementById('signupForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});
 
function validateForm() {
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  const usernameError = document.getElementById('usernameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');

  usernameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';

  if (username === '') {
    usernameError.textContent = 'Username is required';
  }

  if (email === '') {
    emailError.textContent = 'Email is required';
  } else if (!validateEmail(email)) {
    emailError.textContent = 'Please enter a valid email address';
  }

  if (password === '') {
    passwordError.textContent = 'Password is required';
  }

  if (confirmPassword === '') {
    confirmPasswordError.textContent = 'Please confirm your password';
  } else if (password !== confirmPassword) {
    confirmPasswordError.textContent = 'Passwords do not match';
  }
}

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
});