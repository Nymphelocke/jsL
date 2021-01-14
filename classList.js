const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red', 'tutturuu'));
// console.log(btns[0].classList.remove('blue'));
// // toggle - если класса на элементе в данный момент нету, то добавляет
// // если класс присутствует - то убирает его
// console.log(btns[0].classList.toggle('blue'));
//
// // contains -
// if (btns[1].classList.contains('red')) {
//     console.log('class exist')
// }

// btns[0].addEventListener('click', () => {
//     btns[1].classList.toggle('red')
// });

// ДЕЛЕГИРОВАНИЕ СОБЫТИЙ
const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (event) => {
    console.dir(event.target);
    if (event.target && event.target.tagName === "BUTTON") {
        console.log('button clicked')
    }
    if (event.target && event.target.matches("button.red")) {
        console.log("IT'S ALSO RED!")
    }
    if (event.target && event.target.classList.contains("blue")) {
        console.log('blue button clicked')

    }
})

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);