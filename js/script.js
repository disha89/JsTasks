
const numberOfFilms = +prompt('Сколько Фильмов Вы Уже Посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Сколько Фильмов Вы Уже Посмотрели?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Сколько Фильмов Вы Уже Посмотрели?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

const number = 50;

if(number == 10) {
    console.log('Not Good');
} else if (number === 10) {
    console.log('Very Not Good');
} else if (number == 10) {
    console.log('Very Very Not Good');
} else {
    console.log('Akuna Matata');
}

(number === 50) ? console.log('Hola') : console.log('Nihao');

const num = 30;

switch (num) {
    case 50:
        console.log('Work');
        break;
    case 40:
        console.log('Work Toy');
        break;
    case 70:
        console.log('Tros');
        break;
    default:
        console.log('Pumba');
        break;
}

