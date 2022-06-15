const menuHamb = document.querySelector('.menuhamb input');
const nav = document.querySelector('nav ul');

menuHamb.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
