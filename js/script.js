const menuHamb = document.querySelector('.menuhamb input');
const nav = document.querySelector('.slide');

menuHamb.addEventListener('clik', function () {
  nav.classList.toggle('slide');
});
