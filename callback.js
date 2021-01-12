"use strict";

function first() {
    //heavy function code
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2)
}

first();
second();

//callback

function learnJS(lang, callback) {
    console.log(`Learn: ${lang}`);
    callback();
}

function done() {
    console.log('Great!')
}

learnJS('JavaScript', done);