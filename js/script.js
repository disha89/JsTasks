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

let sut = (24 * 30) * (60 * 60);
console.log(sut);

let god = (365 * 24) * (60 * 60);
console.log(god);

let min = 24 * 60;
console.log(min);

let arr = ['a', 'b', 'c'];
console.log(arr[0]); 
console.log(arr[1]); 
console.log(arr[2]); 

let arr = ['a', 'b', 'c', 'd'];
    arr[0] =  'a+b+c+d';
    console.log(String(arr[0]));

let agg = [1, 2, 3];
console.log(agg[0] + agg[1] + agg[2]);

let arr = [1, 3, 4, 6];
let result = arr[0] * arr[1] + arr[2] * arr[3];
console.log(result);


let arr = [1, 2, 3, null, '', '2'];
console.log(arr[arr.length - 1]);

let arr = [1, 2, 3, 4];
    arr[0] += 3;
    arr[1] += -1;
    arr[2] += -10;
    arr[3] += '@#!$@!';
console.log(arr);

let arr = [1, 2, 3];
    arr[0]++;
    ++arr[1];
    arr[2]++;
console.log(arr);

let arr = [1, 2, 3,];
    arr[3] = 4;
    arr[4] = 5;
console.log(arr);

let arr = [];

    arr[3] = 'a';
    arr[8] = 'b';
console.log(arr.length);

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);

function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage('hello World');

function calc(a, b) {
    return a + b;
}

console.log(calc(7, 9));
console.log(calc(3, 7));
console.log(calc(71, 39));
console.log(calc(0.9, 0.2));

const calcl = (a, b) => {
    console.log(calc(77, 15));
    return a - b;            
};

const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);


// function sayHello(text) {
//     alert(text);
//     return ; 
// }

// sayHello('Привет,Антон!');

let arr = Array();

function returnNeighboringNumbers(num = 6) {
    num.arr += [5, 6, 8]; 
    return;
}

returnNeighboringNumbers();

function getMathResult(number, calc) {
    for(let i = 0; i < 6; i++) {
        console.log('1цикл')
        for(let j = 0; j < i; j++ ) {

        }
    }
}

getMathResult(3, 5);

function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello('Alex');

function eturnNeighboringNumbersr(num) {
    return [num - 1, num, num + 1];
}

eturnNeighboringNumbersr(15);

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);

let obj = {
    1:'пн', 2:'вт', 3:'ср', 4:'чт', 5:'пт', 6:'сб', 7:'вс'
};

console.log(obj[4]);

let objj = {1:'a', 2:'b', 3:'c'};

console.log(objj[1] + objj[2] + objj[3]);

let objjj = {'1key': 'a', 'key-2': 'b', key3: 'c'};
console.log(objjj['1key']);  // выведет 'a'
console.log(objjj['key-2']); // выведет 'b'
console.log(objjj['key3']);  // выведет 'c'

let objjjj = {'1a':1, '2b':2, 'c-c':3};

console.log(objjjj['1a'] + objjjj['2b'] + objjjj['c-c']);


let Obj = {'1a': 1, 'b2': 2, 'eee-': 3, 'd4': 4};

console.log(Obj['d4']);

let user = {
    name: 'Петр',
    surname: 'Петров',
    patronymic: 'Генадьевич'
};

console.log(user['name'] + ' ' + user['surname'] + ' ' + user['patronymic']);

let date = {
    year: 23,
    maunts: 07,
    day: 25
};

console.log(`${date['year']}-${date['maunts']}-${date['day']}`);

let oBj = {};

oBj[1] = 'Valera',
oBj[3] = 2134,
oBj[0] = 'Ha';

console.log(oBj);

let arr = ['a', 'b', 'c'];
let key = 2;

console.log(arr[key]);
console.log(typeof arr[key]);

let arr = [1, 2, 3, 4, 5];

let key1 = 2;
let key2 = 4;

console.log(arr[key1] + arr[key2]);

let obj = {'a': 1, 'b': 2, 'c': 3};

let key = 'c';

console.log(obj[key]);

let obj = {text: '+++', key: '!!!'};
let key = '';

console.log(obj.key);

let a = [1, 2, 3];
let b = a;

b[1] = '!'; 

console.log(a[1]);
console.log(typeof a);
console.log(Array.isArray(a));

const brand = 'Niva';
const model = 'Chevrale';
const color = 'blue';
const year = 1999;

let carHtml;

carHtml = '<h3>' + 'Машина Мечты' + '</h3>' +
'<ul>' +
    '<li>brand: ' + brand + '</li>' +
    '<li>model: ' + model + '</li>' +
    '<li>color: ' + color + '</li>' +
    '<li>year: ' + year + '</li>' +
'</ul>';

carHtml = `<h3> New Car  </h3>
<ul>
<li>brand: ${brand}</li>
<li>model: ${model}</li>
<li>color: ${color}</li>
<li>year: ${year}</li>
<li>years: ${2000 + 10}</li>
<li>benzin: ${benz()}</li>
<li>cuppon: ${year < 2000 ? '20%':'10%'}</li>
</ul>`;

function benz(){
    return 92;
}

document.body.innerHTML = carHtml;

let resalt;

const firstName = prompt('What is your firstname?');
const lastName = prompt('What is your lastname?');
const myOld = prompt('How old are you?');

resalt = 'Your name is ' + firstName  + '. Your last name is ' + lastName + '. Your old is ' + myOld + '.';
resalt = `Your name is ${firstName}. Your last name is ${lastName}. Your old is ${myOld}.`;

console.log(resalt);

let x = 5;

    x += 5;
    x -= 2;
    x *= 4;
    x /= 4;
    x **= 4;
    x %= 4;
    x++;
    x--;

console.log(x);


let result;

const massa = prompt('How much do you weigh?');
const growth = prompt('How tall are you?');

result = massa /(growth**2);
console.log(result);

let good = result <= 24.9;
let notGood = result > 24.9;

good = alert('Vse Klassno');
notGood = alert('Not Good');

const weight = prompt('How much do you weigh?');
const height = prompt('How tall are you?');

const bodyMassIndex = weight / Math.pow(height, 2);
const areYouOverWeight = bodyMassIndex >= 25;
console.log(bodyMassIndex);
console.log(areYouOverWeight);

alert('Are you Overweight? ' + areYouOverWeight);


