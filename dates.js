"use strict";

const now = new Date();
const anotherDate = new Date(2019, 4, 10, 20, 15);
const nullDate = new Date(0);
const oldDate = new Date(-1231121221212)

console.log(now)
console.log(anotherDate)
console.log(nullDate)
console.log(oldDate)
console.log()
// экспериментируем
console.log(now.getFullYear())
console.log(now.getMonth()) // returns 0 (Jan)
console.log(now.getDay()) // начинается с воскресения (0)
console.log(now.getDate()) // getHours, getMinute, etc...
console.log(now.getHours())
// аналоги для UTC
console.log(now.getUTCHours()) // return +0 time

//
console.log(now.getTimezoneOffset()) // различие с UTC в минутах
console.log(now.getTime()) // отдает timestamp

// установка даты (ориентировка на UTC в консоли, но в браузере отрабатывает на текущую локальную ТЗ)
console.log(now)
now.setHours(23)
console.log(now)

// отсчет даты
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} мс.`)