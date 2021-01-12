"use strict";

// TYPICAL FUNCTION

let num = 20

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num)
}

showFirstMessage('hello');
console.log(num)

// RETURN FUNCTION

function calc(a, b) {
    return (a + b);
}

console.log(calc(10, 5))

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum)

// FUNCTIONAL EXPRESSION

const logger = function () {
    console.log('hello 2')
};

logger();

// ARROW FUNCTIONS

const calc2 = (a, b) => a + b;
const calc3 = (a, b) => {
    console.log('arrow function executed');
    return a + b;
};

console.log(calc3(5,5))