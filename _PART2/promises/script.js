"use strict";

// callback hell
// console.log('Запрос данных');
//
// setTimeout(() => {
//     console.log('Подготовка данных...');
//
//     const product = {
//         name: 'TV',
//         price: 5000
//     };
//
//     setTimeout(() => {
//         product.status = 'reserved';
//         console.log(product)
//     }, 2000);
//
// }, 2000);

// PROMISES

const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 5000
        };

        resolve(product);

    }, 3000);
})

// обработка resolve (then) и reject (catch). Так же в конце блока ставится finally
req.then((product) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(product)
            product.status = 'reserved';
            if (true) {
                resolve(product);
            } else {
                reject()
            }
        }, 3000);
    })
}).then(product => {
    console.log(product);
    product.consumer = 'Ivan';
    return product
}).then(product => {
    console.log(product)
}).catch(() => {
    console.error('Ошибка')
}).finally(() => {
    console.log('Данные успешно обработаны')
})

//

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

test(1000).then(() => console.log('1000 ms'))

// Promise all - then только после того как все запросы будут выполнены
Promise.all([test(1500), test(2500)]).then(() => {
    console.log('ALL выполнено')
});

// Race - ожидает первого выполненого промиса из массива
Promise.race([test(1500), test(2500)]).then(() => {
    console.log('RACE выполнено')
});
