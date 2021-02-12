"use strict";

const person = {
    name: 'Alex',
    tel: '+79148552222',
    parents: {
        father: 'Den',
        mother: 'Jessica'
    }
};

// stringify - превращение объекта в json

console.log(JSON.stringify(person))

// Превращение json в объект
// вообще тут может быть ответ от сервера, но сейчас возьмем текущий объект

console.log(JSON.parse(JSON.stringify(person)))

// создаем полноценный клон объекта (в обычном js это сложно)
const clone = JSON.parse(JSON.stringify(person))
clone.parents.mother = 'Ann';
console.log(clone)