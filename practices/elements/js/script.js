'use strict';

// const box = document.getElementById('box'); // получение единичного обхекта по ID
//
// const buttons = document.getElementsByTagName('button'); // получение всех элементов с тегом button (псевдоколлекция)
// const circles = document.getElementsByClassName('circle'); // получение всех элементов с классом circle (псевдоколлекция)
//
// console.log(buttons);
// console.log(buttons[1]);
// console.log(circles);
// console.log(circles[1]);
//
// // БОЛЕЕ СОВРЕМЕННЫЕ МЕТОДЫ
// // ВНУТРЬ ПОМЕЩАЕТСЯ CSS СЕЛЕКТОР ('*', 'div', ':visited', '.', '#', etc...), А ТАК ЖЕ ПРЕДОСТАВЛЯЕТ МЕТОД FOREACH
// const hearts = document.querySelectorAll('.heart');
// hearts.forEach(item => {
//     console.log(item)
// })
// console.log(hearts);
// // БЕРЕМ ТОЛЬКО ПЕРВЫЙ ЭЛЕМЕНТ ПО СЕЛЕКТОРУ
// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart)

const box = document.getElementById('box'),
    buttons = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');

box.style.backgroundColor = 'blue';