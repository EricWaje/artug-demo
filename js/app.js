const navbar = document.getElementById('menu');
const hamb = document.getElementById('hamb');
const ul = document.getElementById('menu-ul');
const menu = document.getElementById('navbarSupportedContent');
const politicas = document.getElementById('em-po');
const links = document.querySelectorAll('.scroll-to');

links.forEach((item) => {
    item.addEventListener('click', () => {
        const el = document.getElementById(item.getAttribute('data-link'));
        const pantalla = window.screen.width;
        if (pantalla < 600) {
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        } else {
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    });
});

window.onscroll = function () {
    const y = window.scrollY;
    const ancho = window.screen.width;
    if (y > 20 && ancho > 600) {
        navbar.style.marginTop = '0px';
        navbar.style.backgroundColor = '#176bfc';
        navbar.style.transition = 'all 0.5s ease-in-out';
    } else if (y >= 0 && ancho < 600) {
        navbar.style.marginTop = '0px';
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.transition = 'all 0.5s ease-in-out';
        navbar.style.borderBottom = '4px solid #176bfc';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.marginTop = '0px';
        navbar.style.transition = 'all 0.5s ease-in-out';
        navbar.style.borderBottom = '0px solid #176bfc';
    }
};

const modificarMenu = () => {
    const uno = document.getElementById('barraUno');
    const dos = document.getElementById('barraDos');
    const tres = document.getElementById('barraTres');

    if (dos.style.opacity !== '0') {
        uno.style.transform = 'translateY(10px) rotate(45deg)';
        uno.style.transition = 'all 0.2s ease-in-out';
        tres.style.transform = 'translateY(-7px) rotate(135deg)';
        tres.style.transition = 'all 0.2s ease-in-out';
        dos.style.opacity = '0';
        dos.style.transition = 'all 0.2s ease-in-out';
    } else {
        uno.style.transform = 'translateY(0px) rotate(0deg)';
        tres.style.transform = 'translateY(0px) rotate(0deg)';
        dos.style.opacity = '1';
        dos.style.transition = 'all 0.2s ease-in-out';
        tres.style.transition = 'all 0.2s ease-in-out';
        uno.style.transition = 'all 0.2s ease-in-out';
    }
};

const cerrarMenu = () => {
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    }
};

const start = () => {
    hamb.addEventListener('click', modificarMenu);
    politicas.addEventListener('click', cerrarMenu);
};

window.onload = start;
