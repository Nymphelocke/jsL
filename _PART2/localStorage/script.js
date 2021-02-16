'use strict';

// new key
localStorage.setItem('number', '0');
// get key
console.log(localStorage.getItem('number'))
// delete key
localStorage.removeItem('number')
// clear all storage
// localStorage.clear()

// PRACTICE ----------------------
const
    checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('checkbox')) {
    checkbox.checked = true
}
if (localStorage.getItem('color') === 'changed') {
    form.style.backgroundColor = 'coral'
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('checkbox', true)
})

change.addEventListener('click', () => {
    if (localStorage.getItem('color') === 'changed') {
        localStorage.removeItem('color')
        form.style.backgroundColor = 'white'
    } else {
        localStorage.setItem('color', 'changed')
        form.style.backgroundColor = 'coral'
    }
})
// saving object
// converting to json
const persone = {
    name: 'Alex',
    age: 25
}

localStorage.setItem('persone', JSON.stringify(persone))

console.log(JSON.parse(localStorage.getItem('persone')))
