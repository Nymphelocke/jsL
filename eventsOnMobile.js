"use strict";

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault(); // ОТМЕНЯЕТ СТАНДАРТНОЕ ПОВЕДЕНИЕ БРАУЗЕРА НА ВСЯКИЙ СЛУЧАЙ
        console.log('touch coordinates:');
        console.log('x: ' + Math.round(e.touches[0].pageX));
        console.log('y: ' + Math.round(e.touches[0].pageY));
    })
})

// СВОЙСТВА
// touches - сколько пальцов
// targetTouches -  сколько пальцов на объекте
// changedTouches - список пальцев которые учавствуют в текущем событии