'use strict';

// GET OR SET
const person = {
    name: 'Alex',
    age: 25,

    get userAge() {
        return this.age
    },
    set userAge(num) {
        this.age = num
    }
}

console.log(person.userAge) // ГЕТЕРЫ БЕЗ СКОБОК, РАБОТАЕТ КАК СВОЙСТВО
person.userAge = 30 // СЕТЕР ВЫГЛЯДИТ КАК СВОЙСТВО, ЕСЛИ ПРОСТО ГЕТЕР С ТАКИМ ИМЕНЕМ ТО БУДЕТ ОШИБКА
console.log(person.userAge)