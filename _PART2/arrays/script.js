"use strict";

// foreach не возвращает массив

//----- метод filter - делает по правилам и возвращает новый массив

const names = ['Andrew', 'Igor', 'Jasper', 'Alexander', 'Ann'];

const shortNames = names.filter(function (name) {
    return name.length < 5;
});

console.log(shortNames); // return [ 'Igor', 'Ann' ]

//----- метод map - позволяет изменить каждый элемент внутри него, вызвращает новый массив

let answers = ['ivAn', 'alexANDER', 'Hello', 'SoMeThInG'];
// вариант написания 1
const result = answers.map(item => {
    return item.toLowerCase();
})

// короткий вариант написания стрелочной функции
const result2 = answers.map(item => item.toLowerCase());

// вариант 3 с перезаписыванием оригинального массива (лучше не делать)
answers = answers.map(item => item.toLowerCase());

console.log(result) // return [ 'ivan', 'alexander', 'hello', 'something' ]
console.log(result2) // return [ 'ivan', 'alexander', 'hello', 'something' ]
console.log(answers) // return [ 'ivan', 'alexander', 'hello', 'something' ]

//----- every/some - возвращают либо true либо false
const someArray = [4, 'qwe', 'del'];

// проверим есть ли внутри массива хотя бы одно число
console.log(someArray.some(item => typeof(item) === 'number'))

// проверим является ли все элементы числами
console.log(someArray.every(item => typeof(item) === 'number'))

//----- reduce - собирает массив в одно единое целое
const arr = [4, 5, 2, 1, 6, 7, 21];

// получить сумму элементов
// reduce имеет 2 аргумента, подставляются автоматически: 1 - Сумма, изначально равен 0; 2 - Элемент массива;
const res = arr.reduce((sum, current) => sum + current);
console.log(res)

// сложение строк
const arr2 = ['apple', 'pear', 'plum'];
const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`)
console.log(res2) // return apple, pear, plum

// так же может принимать еще один аргумент, начальное значение
const res3 = arr.reduce((sum, current) => sum + current, 100)
console.log(res3)

// ----------------------Практический пример-------------------------
// ЗАДАЧА: получить имена из объекта
const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

//----- entries - превращение объекта в матрицу (массив массивов)
// + chaining
const newArr = Object.entries(obj)
    .filter(item => item[1] === 'person') // оставляем значения с person
    .map(item => item[0]) // получаем первые значения

console.log(newArr)
