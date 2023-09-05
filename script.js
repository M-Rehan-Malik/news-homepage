
const menu = document.querySelector('.menu')
const fade = document.querySelector('.fade')
const body = document.querySelector('body')
 


const menuOpenIcon = document.querySelector('.menu-open');
const menuCloseIcon = document.querySelector('.menu-close');

menuOpenIcon.onclick = menuFunction
menuCloseIcon.onclick = menuFunction

function menuFunction() {
    menu.classList.toggle('close')
    fade.classList.toggle('close')
    body.classList.toggle('overflow')
}



