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

function thirdTask() {

    for (let i = 1; i < 11; i++){
        console.log(`Привет Гамно: ${i}`);
        if (i % 2 - 1) {
            console.log(i);
        }
    }
}
thirdTask();


for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        
    } else {
        console.log(i);
    }
}


function fourthTask() {
        let i = 2;
        while (i <= 16) {
        if (i % 2 === 0){
            i++;
        } else {
            console.log(i);
            i++;
        }
    }
}
fourthTask();


function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    
    return arrayOfNumbers;
}
fifthTask();

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);

let result = '';

for (let i = 0; i < 10; i++) {
    if (i < 10) {
        result += 'Привет Как Вам Фильм?';
    }
    
}
console.log(result);

let h = parseInt('5px') ,
    g = parseInt('6px') ;
console.log(g + h);

let a = parseFloat('5.5px'),
    l = parseFloat('6.25px');
//   console.log(a + l + 'px');


let j = parseInt('11px'),
    o = parseFloat('15.7px');
    alert(j + o +'px');

let num1 = 15,
    num2 = 17;
console.log(String(num1) + String(num2));


let nimb = 21456;

// let str = String(nimb).length;

console.log(String(nimb).length);

let hot = 1234,
    dog = 3214;

let str = String(hot).length + String(dog).length;

console.log(str);

let str = 'abcde';

console.log(str[0],str[2],str[4]);

let strr = 'abcde';
let djo = strr[4] + strr[3] + strr[2] + strr[1] + strr[0];

console.log(djo);


let str = 'abcde';
let num = 3;

console.log(str[num]);

let stroka = 'asadgh';
let last = stroka.length -1;

console.log(stroka[last]);
console.log(stroka[4]);

let str = '12345';

let summa =  Number(str[0]) + Number(str[1]) + Number(str[2]) + Number(str[3]) + Number(str[4]);

console.log(summa);

let num = String(12345);

console.log(num[0] + num[1] + num[2] + num[3] + num[4]);

let numb = String(12345);
let numbSu = +numb[0] + +numb[1] + +numb[2] + +numb[3] + +numb[4];

console.log(numbSu);

let num = String(12345);
let numSum = num[4] + num[3] + num[2] + num[1] + num[0];
console.log(numSum);

let num1 = 1;
let num2 = 2;
console.log('сумма: ' + +(num1 + num2));


let a = 1;
let b = 2;
console.log(a + b);

let num = '123';
let sum = +num[0] + +num[1] + +num[2];
console.log(sum);

let num = String(123);
console.log(+num[0]);

let num = String(123);
console.log(num.length);

let a = 24 / 60 / 60;
console.log(a.toFixed());

let num = 123;
let str = String(num);
console.log(str.length);

let num = 123;
let str = String(num);
console.log(str[2]);

let num = 123;
let str = String(num);
console.log(str.length);

let num = 123;
let str = String(num);
console.log(+str[2]);

let a = '123';
let b = '456';
let s = Number(a) + Number(b);

console.log(s);


