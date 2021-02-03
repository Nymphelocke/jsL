"use strict";
// ES5 СТАРЫЙ СТАНДАРТ
// Функция становится конструктором, т.к.можно создавать новые экземпляры
function User(name, id) {
    // св-ва объекта
    this.name = name;
    this.id = id;
    this.human = true;
    // методы объекта
    this.hello = function () {
        console.log(`${this.name} say "Hello!"`)
    }
}

// Дабавляем плюшки
User.prototype.exit = function() {
    console.log(`${this.name} exit`)
}

const ivan = new User('ivan', 1);
const alex = new User('alex', 2);

console.log(ivan);
console.log(alex);
ivan.hello();
ivan.exit();
// ES6 НОВЫЙ СТАНДАРТ - КЛАССЫ