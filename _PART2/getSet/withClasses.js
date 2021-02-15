"use strict";

// нижнее подчеркивание - отключение доступа к значению извне

class User {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    say() {
        console.log(`User name: ${this._name}, user age: ${this._age}`)
    }

    // работаем со значениями
    getAge() {
        console.log(this._age)
    }

    setAge(num) {
        if (typeof num === 'number' && num > 0 && num < 100) {
            this._age = num
        } else {
            console.log('Некорректные значения')
        }
    }
}

const alex = new User('Alex', 33);
alex._name = 'DANS' // принудительно меняем, она, сука, не инкапсулируется блеать
alex.say()
