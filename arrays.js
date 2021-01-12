"use strict";

const arr = [1, 2, 3, 6, 8];

arr.pop(); //removes last array element
arr.push(10); //add element to end

console.log(arr)

// for

for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i])
}

// for of

for (let value of arr) {
    //console.log(value)
}

// arrays methods
// foreach
// item - элемент массива, первый аргумент
// i - порядковый номер элемента
// - третий аргумент, ссылка на массив (используется редко)
arr.forEach(function (item,i, arr) {
    console.log(`${i}: ${item} inside of ${arr}`)
});

// other methods

const str = prompt("", "");
const products = str.split(","); // string to array
products.sort(); // sort all as strings (numbers sorting will go wrong)
//sorting numbers here
function compareNum(a, b) {
    return a - b;
}
products.sort(compareNum);

console.log(products);
console.log(products.join(';'));

// pseudoarrays - has no methods
