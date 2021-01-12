/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// removing adv div
const advDiv = document.querySelector('.promo__adv');
advDiv.remove();

// change genre
const genre = document.querySelector('.promo__genre');
genre.innerHTML = 'ДРАМА';

// change background
const background = document.querySelector('.promo__bg');
background.style.cssText = 'background:url("img/bg.jpg")';

// sort movies
movieDB.movies.sort();
function sortExistingMovies() {
    const movieList = document.querySelectorAll('.promo__interactive-item');
    for (let i = 0; i < movieDB.movies.length; i++) {
        movieList[i].innerHTML = `${i + 1}) ${movieDB.movies[i]} <div class="delete"></div>`
    }
}
sortExistingMovies();

// NEW TASKS
// add movie task
const addButton = document.querySelector('.add').lastElementChild;
addButton.setAttribute('type', 'button');
const addMovieName = document.querySelector('.adding__input');
const addMovieFavorite = document.querySelector('[type="checkbox"]');

addButton.addEventListener('click', function () {
    let newMovieName = addMovieName.value;
    if (addMovieName.value.length > 21) {
        newMovieName = addMovieName.value.substring(0, 20) + '...'
    }
    movieDB.movies.push(newMovieName);
    movieDB.movies.sort();
    const moviesListParent = document.querySelector('.promo__interactive-list');
    const movieElement = document.querySelectorAll('.promo__interactive-item');
    movieElement.forEach(item => {
        item.remove();
    });
    for (let i = 0; i < movieDB.movies.length; i++) {
        let newMovie = `<li class="promo__interactive-item">${i + 1}) ${movieDB.movies[i]}<div class="delete"></div></li>`;
        moviesListParent.insertAdjacentHTML('beforeend', newMovie);
    }
    if (addMovieFavorite.checked === true) {
        console.log('Добавляем любимый фильм')
    }
    addDeleteEvent();
})

function removeMovie(movie) {
    let newMoviesString = movieDB.movies.join(', ');
    movie = movie.replace(/(^\d*[)])\s/, '').replace(/\s+$/, '');
    newMoviesString = newMoviesString.replace(movie,'').replace(/(\s[,])/, '').replace(/(^[,]\s)/, '').replace(/([,]\s*)/g, ',').replace(/([,]$)/, '');
    delete movieDB.movies;
    movieDB.movies = newMoviesString.split(',');
}

// remove movie
function addDeleteEvent() {
    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(item => {
        item.addEventListener('click', function () {
            removeMovie(item.previousSibling.textContent);
            let parentDiv = item.parentElement;
            parentDiv.remove();
            let a = document.querySelectorAll('.promo__interactive-item');
            for (let i = 0; i < a.length; i++) {
                let bA = a[i].firstChild.nodeValue.replace(/(^\d*)/, i + 1);
                a[i].firstChild.textContent = bA
            }
        })
    })
}

addDeleteEvent()
