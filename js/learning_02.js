'use strict';

let numberOfFilms;

while (!numberOfFilms || numberOfFilms.length > 50) {
  numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let lastWathedFilm;
while (!lastWathedFilm || lastWathedFilm.length > 50) {
  lastWathedFilm = prompt('Один из последних просмотренных фильмов?', '');
}

let whatTheSkore;
while (!whatTheSkore || whatTheSkore.length > 50) {
  whatTheSkore = prompt('На сколько оцените его?', '');
}

let lastWathedFilmTwo;
while (!lastWathedFilmTwo || lastWathedFilmTwo.length > 50) {
  lastWathedFilmTwo = prompt('Один из последних просмотренных фильмов?', '');
}

let whatTheSkoreWTho;
while (!whatTheSkoreWTho || whatTheSkoreWTho.length > 50) {
  whatTheSkoreWTho = prompt('На сколько оцените его?', '');
}

// let whatTheSkore = prompt('На сколько оцените его?', '');

// let lastWathedFilmTwo = prompt('Один из последних просмотренных фильмов?', '');

// let whatTheSkoreWTho = prompt('На сколько оцените его?', '');

// while (!lastWathedFilm || lastWathedFilm.length >= 50) {
//   lastWathedFilm = prompt('Сколько фильмов вы уже посмотрели?', '');
// }
// while (!whatTheSkore || whatTheSkore.length >= 50) {
//   whatTheSkore = prompt('Сколько фильмов вы уже посмотрели?', '');
// }
// while (!lastWathedFilmTwo || lastWathedFilmTwo.length >= 50) {
//   lastWathedFilmTwo = prompt('Сколько фильмов вы уже посмотрели?', '');
// }
// while (!whatTheSkoreWTho || whatTheSkoreWTho.length >= 50) {
//   whatTheSkoreWTho = prompt('Сколько фильмов вы уже посмотрели?', '');
// }

// personalMovieDB[lastWathedFilm] = whatTheSkore;
// personalMovieDB[lastWathedFilmTwo] = whatTheSkoreWTho;

console.log(numberOfFilms);

console.log(personalMovieDB);
