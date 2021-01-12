"use strict";

const soldier = {
    health: 100,
    armor: 50
};

const john = {
    class: 'medic',
    weapon: 'suringe'
};

// УСТАРЕВШИЙ ВАРИАНТ

// john.__proto__ = soldier;
//
// console.log(john);
// console.log(john.health);

// НОВЫЙ ВАРИАНТ
// указание после создания
Object.setPrototypeOf(john, soldier);
// указание при создании
const bob = Object.create(soldier);
