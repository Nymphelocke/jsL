/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

// get main tags
const body = document.body; // BODY tag
const head = document.head; // HEAD tag
const html = document.documentElement; // HTML tag

// ОТТАЛКИВАЕМСЯ ОТ РОДИТЕЛЯ

// получение дочерних элементов
const bodyChilds = body.childNodes; // БЕРЕТ ТАК ЖЕ НОДЫ (#text)
// альтернативный вариант через for (избавляемся от текстовых нод)
console.log('----------')
for (let node of body.childNodes) {
    if (node.nodeName == '#text') {
        continue
    }
    console.log(node)
}
console.log('----------')

// получение первого дочернего элемента
const firstBodyChild = body.firstChild; // ALTER: body.firstElementChild
// получение последнего дочернего элемента
const lastBodyChild = body.lastChild; // ALTER: body.lastElementChild
console.log(firstBodyChild);
console.log(lastBodyChild);

//ОТТАЛКИВАЕМСЯ ОТ ДОЧЕРНЕГО ЭЛЕМЕНТА

// получение родительского элемента
console.log(document.querySelector('#current').parentNode); // return div class=first
// получение родительского элемента второго уровня
console.log(document.querySelector('#current').parentNode.parentNode); // return dev class=wrapper
// ПОЛУЧЕНИЕ DATA АТТРИБУТОВ (начинается с data- )
console.log(document.querySelector('[data-current]')); // ПОЛУЧАЕМ ЭЛЕМЕНТ
// получение соседнего следующего элемента
console.log(document.querySelector('[data-current]').nextSibling); // ПОЛУЧАЕМ #TEXT (НОДА)
// получение соседнего предыдущего элемента
console.log(document.querySelector('[data-current]').previousSibling); // ПОЛУЧАЕМ #TEXT (НОДА)

// КАК ПОЛУЧИТЬ ЭЛЕМЕНТ А НЕ НОДУ (АНАЛОГИ ВЫШЕПЕРЕЧИСЛЕННЫХ КОМАНД)
console.log(document.querySelector('[data-current]').nextElementSibling);
console.log(document.querySelector('[data-current]').previousElementSibling);