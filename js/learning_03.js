'use strict';

let numberOfFilms;

// while (!numberOfFilms || numberOfFilms.length > 50) {
//   numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// }

function start() {
  while (
    !numberOfFilms ||
    Number.isNaN(numberOfFilms) ||
    numberOfFilms.length > 50
  ) {
    numberOfFilms = Number(prompt('Сколько фильмов вы уже посмотрели?', ''));
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// function rememberMyFilms() {
//   let i = 3;

//   do {
//     let lastWathedFilm;

//     while (!lastWathedFilm || lastWathedFilm.length > 50) {
//       lastWathedFilm = prompt('Один из последних просмотренных фильмов?', '');

//       let scoreStars;

//       while (!scoreStars || scoreStars.length > 50) {
//         scoreStars = Number(prompt('На сколько оцените его?', ''));
//       }

//       personalMovieDB.movies[lastWathedFilm] = scoreStars;
//     }
//     i--;
//   } while (i ===1);
// }

function rememberMyFilms() {
  for (let i = 0; i < 2; i += 1) {
    let lastWathedFilm;
    let scoreStars;

    while (!lastWathedFilm || lastWathedFilm.length > 50) {
      lastWathedFilm = prompt('Один из последних просмотренных фильмов?', '');
    }

    while (!scoreStars || scoreStars.length > 50) {
      scoreStars = Number(prompt('На сколько оцените его?', ''));
    }

    personalMovieDB.movies[lastWathedFilm] = scoreStars;
  }
}
rememberMyFilms();



const detectPersonalLevel = () => {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
};

detectPersonalLevel();



const showMyDB = () => {
  
}













const showLog = () => {
  console.log(numberOfFilms);
console.log(personalMovieDB)
}

showLog();