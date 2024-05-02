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

personalMovieDB[lastWathedFilm] = whatTheSkore;
personalMovieDB[lastWathedFilmTwo] = whatTheSkoreWTho;

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}
  
  
  console.log(numberOfFilms);

console.log(personalMovieDB);
