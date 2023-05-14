let navbar = document.querySelector('.header .navbar');
let accountBox = document.querySelector('.header .account-box');

document.querySelector('#menu-btn').onclick = () => {
     navbar.classList.toggle('active');
     accountBox.classList.toggle('active');
}
document.querySelector('#user-btn').onclick = () => {
     accountBox.classList.toggle('active');
     navbar.classList.toggle('active');
}

window.onscroll = () => {
     navbar.classList.remove('active');
     accountBox.classList.remove('active');
}