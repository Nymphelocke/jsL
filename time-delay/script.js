// const timerId = setTimeout(function (text) {
//     console.log(text)
// }, 500, 'hello');
//
// const timerId2 = setTimeout(function () {
//     console.log('hello2')
// }, 1000)
//
// const timerId3 = setTimeout(logger, 1500)
//
function logger() {
    if (i === 3) {
        clearInterval(timerBtn)
    }
    console.log('hello');
    i++;
}
//
// // Сброс таймера
//
// clearInterval(timerId3)

// Другой вариант

const btn = document.querySelector('.btn');
let timerBtn,
    i = 0;
//
// btn.addEventListener('click', () => {
//     // const timerBtn = setTimeout(logger, 2000);
//     timerBtn = setInterval(logger, 500);
// })

// рекурсивный вызов ( иногда лучше, если функция тяжелая)

// let id = setTimeout(function log() {
//     console.log('tetexxtt');
//     id = setTimeout(log, 500)
// }, 500)

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id)
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation)