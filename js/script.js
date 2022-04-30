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

if (number == 10) {
    console.log('Not Good');
} else if (number === 10) {
    console.log('Very Not Good');
} else if (number == 10) {
    console.log('Very Very Not Good');
} else {
    console.log('Akuna Matata');
}

(number === 50) ? console.log('Hola'): console.log('Nihao');

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


const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log('Vse Est');
}


const chisburger = 31;
const hotDog = 1111;

if (chisburger === 3 && hotDog) {
    console.log(true);
} else {
    console.log(false);
}

const vodka = 0;
const viski = 3;
const brendi = 5;

if (vodka === 2 || viski || brendi) {
    console.log('Vse Good');
} else {
    console.log('Idem Domoy');
}

console.log((vodka === 2 || viski || brendi));


console.log(NaN || 2 || undefined);

console.log(NaN && 2 && undefined);

console.log(1 && 2 && 3);

console.log(!1 && 2 || !3);

console.log(25 || null && !3);

console.log(NaN || null || !3 || undefined || 5);

console.log(NaN || null && !3 && undefined || 5);

console.log(5 === 5 && 3 > 1 || 5);

let hamburgerr;
const friess = NaN;
const cola = 0;
const nuggets = 2;

if (hamburgerr && cola || friess === 3 && nuggets) {
    console.log('Done!');
}