'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

// РАБОТА С INLINE СТИЛЯМИ
box.style.backgroundColor = 'blue';
// РАБОТА ЧЕРЕЗ CSSText (можно задавать несколько стилей разом)
let width = 500;
box.style.cssText = `background-color: blue; width: ${width}px`;

btns[1].style.borderRadius = '25px';

// ПРИМЕНЕНИЕ СТИЛЕЙ КО ВСЕМ ОБЪЕКТАМ ПСЕВДОМАССИВА
// вариант через цикл
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'black';
}
// вариант через перебор (РАБОТАЕТ ТОЛЬКО С QUERYSELECTORALL)
hearts.forEach(item => {
    item.style.backgroundColor = 'gray';
})

// МЕТОДЫ ДЛЯ РАБОТЫ С ЭЛЕМЕНТАМИ СТРАНИЦЫ
// создание элемента
// (Т.К. ЭЛЕМЕНТ ПО ФАКТУ ОДИН, ТО ОН БУДЕТ ПЕРЕМЕЩАТЬСЯ А НЕ КОПИРОВАТЬСЯ ПРИ ВСТАВКЕ)
const div = document.createElement('div'); // СОЗДАН ВНУТРИ JS, НЕ ОТОБРАЖЕН НА СТРАНИЦЕ
div.classList.add('black'); // ДОБАВИЛИ СТИЛИ ЭЛЕМЕНТУ (ЕЩЕ НЕ ОТОБРАЖЕН)
document.body.append(div); // ДОБАВИЛИ В КОНЕЦ BODY ЭЛЕМЕНТ DIV
// добавить в конец блока
wrapper.append(div);
// добавить в начало блока
wrapper.prepend(div);
// ДОБАВИТЬ ПЕРЕД ИЛИ ПОСЛЕ
// сообщаем перед каким элементом нужно воткнуть блок
hearts[0].before(div);
// после элемента
hearts[0].after(div);
// УДАЛЕНИЕ
hearts[1].remove();
// ЗАМЕНИТЬ ОДИН ДРУГИМ
hearts[2].replaceWith(circles[0]);

// УСТАРЕВШИЕ КОНСТРУКЦИИ
// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[0]);
// wrapper.removeChild(hearts[1]);
// wrapper.replaceChild(circles[0], hearts[2]);

// ВСТАВКА ЗНАЧЕНИЙ В ЭЛЕМЕНТ
// ПЕРВЫЙ ВАРИАНТ (разрешает вст    авку тегов HTML)
div.innerHTML = '<h4>Hello World!</h4>';
// ВТОРОЙ ВАРИАНТ (только для текста)
// div.textContent = 'basic text';
// ТРЕТИЙ ВАРИАНТ ВСТАВКИ HTML КОНСТРУКЦИЙ В ОПРЕДЕЛЕННУЮ ПОЗИЦИЮ
// вставить отдельный блок перед элементом
// beforebegin - вставка перед элементом
// afterbegin - вставка внутрь элемента в начало
// beforeend - вставка внутрь элемента в конец
// afterend - вставка после элемента
div.insertAdjacentHTML('beforebegin', '<h2>eHELLO</h2>');

// ПАРА НЕОЧЕВИДНЫХ ВОЗМОЖНОСТЕЙ JS ДЛЯ ПОЛУЧЕНИЯ ЭЛЕМЕНТА
// получение сердечек через враппер
const wrapper1 = document.querySelector('.wrapper');
const hearts1 = wrapper1.querySelectorAll('.heart');