"use strict";

// xml-http request (OLD METHOD)
const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // open - собирает настройки для подключения
    // параметры: method, url, async (default=true), login, password
    request.open('GET', 'http://openserver.local/_PART2/ajax/js/current.json');
    // HEADER
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // SEND REQUEST
    request.send();

    // Может получить:
    // status - 400, 403, 500, etc
    // statusText - текстовое описание ответа от сервера
    // response - ответ
    // readyState - текущее состояние запроса ( 0 - 4 )
    // ---- События readyState ----
    // используется редко
    // request.addEventListener('readystatechange', () => {
    //     // будет вызываться кадый раз как запрос поменяет состояние
    //     if (request.readyState ===  4 && request.status === 200) {
    //         // ОТВЕТ RESPONSE
    //         // console.log(request.response);
    //         // переделываем JSON ответ в объект
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUsd.value = 'Что-то пошло не так, ошибка';
    //     }
    // });
    request.addEventListener('load', () => {
        if (request.status === 200) {
            // ОТВЕТ RESPONSE
            // console.log(request.response);
            // переделываем JSON ответ в объект
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });

})