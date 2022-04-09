const navMenu = document.getElementById('nav-menu');
const navList = document.getElementById('nav-list');
const navClose = document.getElementById('nav-close');


  navMenu.addEventListener('click', () => {
    navList.classList.add('active');
    navMenu.classList.add('active');
    navClose.classList.add('active');
  })



  navClose.addEventListener('click', () => {
    navList.classList.remove('active');
    navMenu.classList.remove('active');
    navClose.classList.remove('active');
  })

