const menu = document.getElementById('menu');

window.onscroll = function () {
    const y = window.scrollY;

    if (y > 20) {
        menu.style.marginTop = '0px';
        menu.style.backgroundColor = '#176bfc';
        menu.style.transition = 'all 0.5s ease-in-out';
    } else {
        menu.style.backgroundColor = 'transparent';
        menu.style.marginTop = '0px';
        menu.style.transition = 'all 0.5s ease-in-out';
    }
};

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
