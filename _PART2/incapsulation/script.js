"use strict";

// отеделение, сокрытие функций и свойств от вмешательства извне
function User(name, age) {
    this.name = name;
    this.age = age;

    this.say = function () {
        console.log(`User name: ${this.name}, user age: ${this.age}`)
    }
}

const ivan = new User('Ivan', 25);

console.log(ivan.name); // легко получаем свойства
ivan.name = 'OASIXKX'; // легко меняем свойства

ivan.say()
console.log('------------------------')
// ИНКАПСУЛИРУЕМ, ПЕРЕМЕННАЯ НЕДОСТУПНА СНАРУЖИ
function UserSecured(name, age) {
    let userName = name;
    let userAge = age;

    this.say = function () {
        console.log(`User name: ${userName}, user age: ${userAge}`)
    };
    // работаем со значениями
    this.getAge = function () {
        console.log(userAge)
    }
    this.setAge = function (num) {
        if (typeof num === 'number' && num > 0 && num < 100) {
            userAge = num
        } else {
            console.log('Некорректные значения')
        }
    }
}

const alex = new UserSecured('Alex', 32);

alex.say()
alex.setAge(65)
alex.setAge(12412)
alex.say()
