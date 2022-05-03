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

let vin = 60;

while (vin <= 65) {
    console.log(vin);
    vin++;
}

let get = 70;

do {
    console.log(get);
    get++;
}



while(get <= 80);

for (let i = 1; i <= 10; i++) {
    console.log(get);
}

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

//*
//** 
//*** 
//**** 
//***** 
//******

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    
    result += '\n';
}

console.log(result);


ferst: for (let k = 1; k < 3; k++) {
    console.log(`First Level: ${k}`);
    for (let s = 0; s < 3; s++) {
        console.log(`Second Level: ${s}`);
        for (let t = 0; t < 3; t++) {
            if (t === 2) continue ferst;
            console.log(`Third Level: ${t}`);
        } 
    }
}

function firstTask() {
    for (let u = 5; u < 11; u++) {
    console.log(u);
    } 
} 

firstTask();

// Место для второй задачи
function secondTask() {
    let g = 20; 
    for (; g > 9; g--) {
        console.log(g);
        if (g === 13) {
            break;
        }
    }         
}
secondTask();
// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    
    
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    
    
}
// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    
    
    // Не трогаем
    return arrayOfNumbers;
}