// ДЗ 6

// Задача 1
let str1 = 'aaa@bbb@ccc';
str1.replace(/@/g, '!');

console.log(str1); // Если просто применить метод к строке и потом её попытаться вывести, ничего не сработает? Т.е. по сути строка всёравно остаётся неизменной. Это потому что все эти методы только возвращают значения, верно?
console.log(str1.replace(/@/g, '!')); // aaa!bbb!ccc


// Задача 2
let date = new Date;
date = '2025-12-31';

console.log(date.replace(/-/g, '/'));   // 2025/12/31


// Задача 3
let str3 = 'Я учу javascript!';

// .substr()
console.log(str3.substr(2, 3)); // учу
console.log(str3.substr(6, 10)); // javascript

// .substring()
console.log(str3.substring(2, 5)); // учу
console.log(str3.substring(6, 16)); // javascript

// .slice()
console.log(str3.slice(2, 5)); // учу
console.log(str3.slice(6, 16)); // javascript


// Задача 4
let arr4 = [4, 2, 5, 19, 13, 0, 10];
let res = 0;

for(let i = 0; i < arr4.length; i++) {
    res += arr4[i]**3;
}

res = Math.sqrt(res);
console.log(res); // 101.25709851659784


// Задача 5
let a = 3,
    b = 5;

let c = Math.abs(a - b)
console.log(c);

a = 6;
b = 1;
c = Math.abs(a - b); // Каждый раз нужно вызывать функцию для отображения корректного результата? Я попробовал убрать эту строку, ниже вывелась переменная c со значением 2 из предыдущего примера.
console.log(c);


// Задача 6
// В видео мы меняли местами существующие строки. Но дата то изменяется при обновлении страницы. Как-то можно делать перестановку местами при помощи регулярных выражений?
// С функцией не заработало. Я так понимаю, здесь должно быть какое-то другое решение

let date6 = new Date;
console.log(date6);

let opt = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
};

let d = date6.toLocaleString('ru', opt).split(', ');
console.log(d);
d.reverse();
console.log(d);

console.log(d.join(' '));

let f = d[1];

// f = '1.1.2023'; // хотел использовать эту строку для проверки работоспособности функции, когда она добавляет 0 . Если раскомментировать эту строку, начинает ругаться  g[i].unshift is not a function
function f6() {
let g = f.split('.');
console.log(g); // в этой переменной хранится массив с датой


for(let i = 0; i <= 1; i++) {
    if(g[i].length < 2) g[i].unshift('0');
    else continue;
} 
console.log(g);


d.length = 1; //
d.push(g);

console.log(d.join(' '));

}

f6();


// Tue May 30 2023 21:04:57 GMT+0300 (Москва, стандартное время)
// 12:59:59 31.12.2014.



/*
// Просто выводит дату и время в нужном формате (без добавления нулей)

let date6 = new Date;
console.log(date6);

let opt = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
};

let d = date6.toLocaleString('ru', opt).split(', ');
console.log(d);
d.reverse();
console.log(d);

d.join(',');
console.log(d.join(' '));
*/



// Задача 7
// Немного не понял задание, последнюю часть про буква 'a', буква 'b' любое количество раз, буква 'a'.

let str7 = 'aa aba abba abbba abca abea';

let regexp1 = /aba/g,
    regexp2 = /abba/g,
    regexp3 = /abbba/g;

console.log(str7.match(regexp1));
console.log(str7.match(regexp2));
console.log(str7.match(regexp3));


console.log(str7.search(regexp1));
console.log(str7.search(regexp2));
console.log(str7.search(regexp3));
// Так нужно было?



// Задача 8
function f8() {
let number = '+375-17-175-22-33';
let regexp8 = /[+][0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}/;

if(regexp8.test(number) === true) return true;
else return false;
}
f8();
console.log(f8()); // увидеть возвращаемое функцией значение можно только при помощи ээтой строки или можно как-то ещё? Может можно сделать вывод в самой функции, чтобы при её вызове сразу происходил вывод возвращаемого значения?


// Задача 9
// Как понять, имя может содержать только буквы, цифры, но не быть первыми и единственными в имени;
// Чтобы цифры не были первыми? Как это прописать в регулярке?
// Как указывать _-. в регулярке? Если просто прописывать в таком порядке с буквами в квадратных скобках, выдаёт ошибку

function f9() {
    let email9 = 'sav_alex.96@mail.ru';
    let regexp9 = /[0-9a-zA-z_.-]{2,}@[0-9a-z].[a-z]{2,11}/;
    if(regexp9.test(email9) === true) return true;
    else return false;
}
console.log(f9());