const burgerMenu = document.getElementById('burger-menu');
const sideDrawer = document.getElementsByClassName('side-drawer')[0];
const pageOverlay = document.getElementsByClassName('page-overlay')[0];
const btnClose = document.getElementsByClassName('btn-close');

function abreDrawer() {
    sideDrawer.classList.add('mostra-drawer');
    pageOverlay.classList.add('mostra-overlay')
}

function fechaDrawer() {
    sideDrawer.classList.remove('mostra-drawer');
    pageOverlay.classList.remove('mostra-overlay');
}

burgerMenu.addEventListener('click', abreDrawer)
pageOverlay.addEventListener('click', fechaDrawer)
btnClose.addEventListener('click', fechaDrawer)