const menu = document.getElementById('menu');
const hamb = document.getElementById('hamb');
const ul = document.getElementById('menu-ul');

window.onscroll = function () {
    const y = window.scrollY;
    const ancho = window.screen.width;
    if (y > 20 && ancho > 600) {
        menu.style.marginTop = '0px';
        menu.style.backgroundColor = '#176bfc';
        menu.style.transition = 'all 0.5s ease-in-out';
    } else if (y > 30 && ancho < 600) {
        menu.style.marginTop = '0px';
        menu.style.backgroundColor = '#ffffff';
        menu.style.transition = 'all 0.5s ease-in-out';
        menu.style.borderBottom = '4px solid #176bfc';
    } else {
        menu.style.backgroundColor = 'transparent';
        menu.style.marginTop = '0px';
        menu.style.transition = 'all 0.5s ease-in-out';
    }
};

const desplegar = () => {
    const pantalla = window.screen.width;
    if (pantalla < 600) {
        ul.classList.remove('listado-links');
        ul.classList.add('listado-links-mobile');
    } else {
        ul.classList.remove('listado-links-mobile');
        ul.classList.add('listado-links');
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

const start = () => {
    desplegar();
    hamb.addEventListener('click', modificarMenu);
};

window.onload = start;

/* const ancho = () => {
    const ancho = window.screen.width;

    if (ancho < 600) {
        menu.style.backgroundColor = '#176bfc';
    } else {
        menu.style.backgroundColor = 'transparent';
    }
};

const start = () => {
    ancho();
};

window.onload = start; */
