// Объединение элементов в массив
// ...rest -  св-х функции
const log = function (a, b, ...rest) {
    console.log(a, b, rest)
}


log(10, 15, 112, 123, 32, 12, 43, 12123)

function calcOrDouble(num, basis = 1) {
    console.log(num * basis);
}