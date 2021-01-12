"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};

console.log(options.name)
options.makeTest();

//remove key

delete options.name;
console.log(options)

// for each key in object
let counter = 0;

for (let key in options) {
    if (typeof(options[key]) == 'object') {
        for (let i in options[key]) {
            console.log(`Key: [${key}] -> [${i}] Value: ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Key: [${key}] Value: ${options[key]}`);
        counter++;
    }
}

console.log(`Total keys: ${counter}`);

// OBJECT METHODS
// get keys of object
console.log(Object.keys(options)); //returns array
console.log('Main keys count: ' + Object.keys(options).length); //returns number

// Object destructurization
// Istead using this:
// console.log(options['colors']['border']);
// Use this:

const {border, bg} = options.colors;
console.log(border);