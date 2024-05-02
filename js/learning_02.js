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



function sayHello(name) {
  return `Привет, ${name}!`;
}


function returnNeighboringNumbers(number) {
  return [number - 1, number, number + 1]
}


returnNeighboringNumbers(18);


 function sayHello(userName) {
   return ('Привет,' + userName + '!');
 }
console.log(sayHello('aynjh'));
 



function getMathResult(num1,num2) {
  const numberOne = num1;
  const numberTwo = num2;

  if (typeof numberTwo !== 'number' || numberTwo <= 0) {
    return numberOne;
  }

  let result = [];

  for (let i = 0; i < numberTwo; i += 1) {
    result.push(numberOne * (i + 1));
  }

  return result.join('---');
  
}

console.log(getMathResult(10, 5));