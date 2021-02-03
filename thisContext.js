"use strict";

// вариант 1, вызов функции
function showThis(a, b) {
    console.log(this) // undefined
    function sum() {
        console.log(this) // undefined
        return a + b;
    }
    console.log(sum())
}
showThis(4, 5)
// 1) Обычная функция: вернет window. Если 'use strict': вернет undefined.

// вариант 2, метод в объекте
const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this.a)
    }
}
obj.sum()
// 2) Метод в объекте: this - будет ссылкаться на родительский объект

// вариант 3, через конструктор
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(this)
        console.log(`hello ${this.name}`)
    }
}
const ivan = new User('ivan', 1);
ivan.hello()
// 3) this  конструкторах и классах - это новый экземпляр объекта

// вариант 4, ручное присвоение контекста (call, apply, bind)
function sayName() {
    console.log(this);
    console.log(this.name);
}
const user = {
    name: 'john'
}
// sayName().call(user);
// sayName().apply(user);
function count(num) {
    return this * num
}
const double = count.bind(2); // присвоение с аргументом
console.log(double(4)); // удвоение 4
console.log(double(5)); // удвоение 5

// РАБОТА С HTML

const btn = document.querySelector('#a');
const btn2 = document.querySelector('#b');
// когда функция в обработчике событий записана в классическом виде: контект вызова сам элемент в котором произошел
// вызов (ВЕРНЕТ BUTTON)
btn.addEventListener('click', function () {
    console.log(this);
})
// у стрелочной функции нету контекста, поэтому он берет его у родителя (ВЕРНЕТ WINDOW)
btn2.addEventListener('click', () => {
    console.log(this)
})