/* eslint-disable no-undef */
const btnSignup = document.getElementById('btn-signup');
const signin = document.getElementById('signin');
const signup = document.getElementById('signup');
const btnReset = document.getElementById('btn-reset');
const modalReset = document.getElementById('reset-modal');
const btnChangePassword = document.getElementById('btn-change-password');
const closeReset = document.getElementById('close-reset');
const menu = document.getElementById('menu-click');
const btnLogin = document.getElementById('btn-login');
const messa = document.getElementById('message');

btnSignup.addEventListener('click', () => {
  signin.style.display = 'none';
  signup.style.display = 'block';
});

btnReset.addEventListener('click', () => {
  document.getElementById('overall').style.background = 'rgba(0, 0, 0, 0.1)';
  modalReset.style.display = 'block';
});

btnChangePassword.addEventListener('click', () => {
  modalReset.style.display = 'none';
  document.getElementById('overall').style.background = 'rgba(0, 0, 0, 0.9)';
});

closeReset.addEventListener('click', () => {
  modalReset.style.display = 'none';
  document.getElementById('overall').style.background = 'rgba(0, 0, 0, 0.9)';
});

menu.addEventListener('click', () => {
  document.getElementById('menu').classList.toggle('active');
});
function show() {
  document.getElementById('menu').classList.toggle('active');
}
const btnOpen = document.getElementById('btnopen');
btnOpen.addEventListener('click', () => {
  document.getElementById('trash').style.display = 'block';
});
