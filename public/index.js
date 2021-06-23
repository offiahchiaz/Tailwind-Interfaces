const burger = document.querySelector('#burger');
const burger1 = document.querySelector('#burger1');
const menu = document.querySelector('#menu');
const menu1 = document.querySelector('#menu1');
const search = document.querySelectorAll('.search');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

burger1.addEventListener('click', () => {
    // if (menu1.classList.contains('hidden')) {
    //     menu1.classList.remove('hidden');
    // } else {
    //     menu1.classList.add('hidden');
    // }
});