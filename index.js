const hamMenu = document.querySelector('.hamburger-menu');
const navContainer= document.querySelector('.nav-container');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  navContainer.classList.toggle('active');
});