"use strict";

// ВАРИАНТ 1
let a = 1;
let b = a;

b = b + 5;

console.log(`a: ${a}, b: ${b}`); // ALL OK

// ВАРИАНТ 2

const orig = {
    a: 5,
    b: 10
}

const copy = orig; // ПРИСВАИВАЕТСЯ ССЫЛКА НА ОБЪЕКТ
copy.a = 10; // IT'S ALSO CHANGE ORIG

console.log(orig);
console.log(copy); // WRONG

// КОГДА МЫ РАБОТАЕМ С ПРОСТЫМИ ТИПАМИ - ОНИ ПЕРЕДАЮТСЯ ПО ЗНАЧЕНИЮ (ВАРИАНТ 1)
// КОГДА РАБОТАЕМ СО СЛОЖНЫМИ ТИПАМИ - ОНИ ПЕРЕДАЮТСЯ ПО ССЫЛКЕ (ВАРИАНТ 2)


// ----ПОВЕРХНОСТНОЕ КОПИРОВАНИЕ ОБЪЕКТОВ (ВЛОЖЕННЫЕ ОБЪЕКТЫ В ОБЪЕКТЕ ПЕРЕДАЮТСЯ КАК ССЫЛКИ)
// СПОСОБ НОМЕР 1 (ЦИКЛ)
function copyObjLight(mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        objCopy[key] = mainObj[key]
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyObjLight(numbers);
newNumbers.a = 15;

console.log(numbers);
console.log(newNumbers);

// СПОБОБ НОМЕР 2
// ПЕРЕДАЧА МАЛЕНЬКОГО ОБЪКЕТА В БОЛЬШОЙ ОБЪЕКТ
const add = {
    d: 17,
    e: 20
}
// #1
console.log(Object.assign(numbers, add)); //ПЕРЕДАЧА ДАННЫХ ADD В NUMBERS
// #2
const clone = Object.assign({}, add); //СОЗДАНИЕ КОПИИ ADD
clone.d = 20;

console.log(add);
console.log(clone);

// МЕТОД СОЗДАНИЯ КОПИИ МАССИВА
const oldArray = ['a', 2, 'cc'];
const newArray = oldArray.slice(); // КОПИРУЕМ СТАРЫЙ МАССИВ В НОВЫЙ
newArray.push(12);

console.log(oldArray);
console.log(newArray);

// НОВЫЕ СПОСОБЫ В ES6-ES8 (SPREAD ОПЕРАТОРЫ)
const video = ['youtube', 'rutube', 'vimeo'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook']; //разложит массивы на элементы и передаст в новый массив

console.log(internet)

//вариант посложнее
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const numA = [2, 5, 7];
console.log(...numA); // Разложит на 3 отдельных элемента и передаст в функцию

// еще один новый способ (так же доступен и для объектов)
const array = ['a', 'bb', 'cd'];
const newAarray = [...array];
newAarray.push(10);

console.log(array);
console.log(newAarray);

// вариант с объектом
const q = {
    one: 1,
    two: 2
}
const newQ = {...q};
newQ['three'] = 3;

console.log(q);
console.log(newQ);


