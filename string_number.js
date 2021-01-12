"use strict";

const str = 'teSt';
const arr = [1, 2, 3]

console.log(str.length);
console.log(arr.length);
console.log(str[1])

// register
console.log(str.toUpperCase())

// getIndex
const fruit = 'some fruit';

console.log(fruit.indexOf('fruit')); //return index
console.log(fruit.indexOf('not_found')); //return -1 (Not found)

// Hot to edit string
const logg = 'hello world';

console.log(logg.slice(logg.indexOf('w'))); //return world
console.log(logg.slice(-5)); //return world (also accept negative numbers)

console.log(logg.substring(logg.indexOf('w'))); //return world (doesn't accept negative numbers) FROM & TO
console.log(logg.substr(logg.indexOf('w'), 5)); //return world (accept length as second arg)

// NUMBERS (using Math)
const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test)); //return 12 as number
console.log(parseFloat(test)); //return 12.2 as number