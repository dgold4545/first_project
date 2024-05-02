'use strict';

'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let lastWathedFilm = prompt('Один из последних просмотренных фильмов?', '');
let whatTheSkore = prompt('На сколько оцените его?', '');
let lastWathedFilmTwo = prompt('Один из последних просмотренных фильмов?', '');
let whatTheSkoreWTho = prompt('На сколько оцените его?', '');

personalMovieDB[lastWathedFilm] = whatTheSkore;
personalMovieDB[lastWathedFilmTwo] = whatTheSkoreWTho;

console.log(numberOfFilms);

console.log(personalMovieDB);
