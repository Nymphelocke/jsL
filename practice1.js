"use strict";

const numberoffilms = +prompt('Сколько фильмов вы просмотрели? Укажите число.');

const personalMovieDB = {
    count: numberoffilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    lastTwoMovies: function() {
        for (let i = 0; i < 2; i++) {
            let question = prompt('Один из последних просмотреных фильмов? Укажите название.');
            if (question == null || question.length === 0 || question.length > 50 || question === ' ') {
                i -= 1;
                continue;
            }
            let answer = prompt('По шкале от 1 до 10 как бы вы его оценили? Укажите число.');
            if (!answer || answer < 1 || answer > 10 || answer === '' || answer === ' ') {
                i -= 1;
                continue;
            }
            this.movies[question] = answer;
        }
    },
    userGreetings: function () {
        if (this.count < 10) {
            console.log('Вы просмотрели мало фильмов.')
        } else if (this.count < 30) {
            console.log('Вы просмотрели немного фильмов.')
        } else if (this.count >= 30) {
            console.log('Вы просмотрели очень много фильмов!')
        } else {
            console.log('Ошибка.')
        }
    },
    showMyDB: function () {
        console.log(this)
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let genre = prompt('Ваш любимый жанр #' + i);
            if (!genre || genre === '' || genre === ' ') {
                i--;
                continue
            }
            this.genres.push(genre);
        }
        let i = 1;
        for (let genre in this.genres) {
            console.log(`Любимый жанр #${i} - ${this.genres[genre]}`)
            i++;
        }
    },
    toggleVisibleMyDB: function () {
        if (this.private === false) {
            this.private = true
        } else {
            this.private = false
        }
    }
}

personalMovieDB.lastTwoMovies()
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.userGreetings();
