(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const navLinks = document.querySelectorAll('.nav__link a');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('nav__link--show');
        });
    });
})();
const menu = document.querySelector('.nav__link--menu');
const menuButton = document.querySelector('.nav__menu');
const closeButton = document.querySelector('.nav__close');
const body = document.querySelector('body');

menuButton.addEventListener('click', function() {
  menu.classList.toggle('nav__link--menu-open');
  body.classList.toggle('no-scroll'); // Agregue o elimine la clase "no-scroll" según corresponda
});

closeButton.addEventListener('click', function() {
  menu.classList.remove('nav__link--menu-open');
  body.classList.remove('no-scroll'); // Elimine la clase "no-scroll"
});
