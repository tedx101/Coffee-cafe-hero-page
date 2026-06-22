// Mobile nav toggle
const burger = document.getElementById('navBurger');
const mobileNav = document.getElementById('navMobile');

burger.addEventListener('click', () => {
  mobileNav.classList.toggle('is-open');
});

mobileNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mobileNav.classList.remove('is-open'));
});

// Nav shadow intensifies on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 8);
});
