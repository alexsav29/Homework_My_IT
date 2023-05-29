// ДЗ 5
/*
document.write('<h2>JS. Homework #5</h2>');

// Задача 1
document.write('Задача 1<br />');

function f1(a, b, c) {
    let s1 = 0;
    s1 = (a - b) / c;
    console.log(s1);
}

f1(12, 2, 2);  // 5

document.write('------------------- <br />');
// -----------------------------------------



// Задача 2
document.write('Задача 2<br />');

function f2(a) {
    return a**3;
    // return a**2;  // Вопрос. В видео говорилось, что функция может возвращать только что-то одно. В задании написано, что нужно сделать функцию, которая возвращает куб числа и его квадрат. Получается нужно делать две функции?

}
console.log(f2(2));


function f2_2(a) {
    return a**2;
}

console.log(f2(3));
// -----------------------------------------



// Задача 3

function min(a, b) {
    if(a < b) return a;
    else if (b < a) return b;
    else return 'Числа равны';
}
console.log(min(2,5));

function max(a, b) {
    if(a > b) return a;
    else if (b > a) return b;
    else return 'Числа равны';
}
console.log(max(2,5));
// -----------------------------------------



// Задача 4
function f4(a,b) {
    a = +prompt('Введите начальное значение диапазона массива');
    b = +prompt('Введите конечное значение диапазона массива');
    let arr = [];
    for(let i = a; i <= b; i++) {
        arr.push(i);
    }

    return arr;

}

function f4_2() {
    console.log(f4());
}

f4_2();
*/

// -----------------------------------------

/*

// Задача 5

function isEven(a) {
    if(a % 2 === 0) return true;
    else return false;
}

console.log(isEven(5)); // false
console.log(isEven(4)); // true

// -----------------------------------------



// Задача 6
// Непонимаю почему она выдаёт ошибку и не работает
let arr6 = [];
function f6(array) {
    for(let i = 0; i < array.length; i++) {
        if(isEven(array[i]) == true) arr6.push(array[i]);
        else continue;
    } 

    return arr6;
}

f6([1, 5, 8, 10, 157, 2, 7]);

console.log(f6());
*/

// Ещё не понимаю, почему в данном случае (ниже) возвращается undefined, а не выводится переданный в функцию массив
// function f6(array) {
//     return array;
// }

// f6([1, 5, 8, 10, 157, 2, 7]);
// console.log(f6());



// Задача 7

/*
// Пытался решить задачу полностью. Получилось строить только вторую пирамиду из символов * или других символов. С цифрами не заработала - страница зависла. Не понимаю почему

function f7(h, b) { 

    if(b != ' ') {
        for(let i = 1; i <= h; i++) {
            let str = '';
            for(let j = 1; j <= i; j++) {
                str += b;
            }
            console.log(sum);
        }
    } else {
    
    for(let i = 1; i <= h; i++) {
        let num = 0;
            num += 1;
        for(let j = 1; j <= i; i++) {
            num += +num;
        }
        console.log(num);
    }
    }
}



f7(7, ' '); // не выводится ничего, потому что пробел
f7(7, 'b'); // выведется пирамидка из символов b высотой 7 строк
f7(7);
*/

/*
// Здесь пытался отдельно построить пирамиду из цифр. Тоже не получилось
function f7 (h) {
for(let i = 1; i <= h; i++) {
    let num = 0;
        num += 1;
    for(let j = 0; j <= i; i++) {
        num += +num;
    }
    console.log(num);
}
}
f7(8);
*/


// Задача 8
/*
function f8 () {
    let h = +prompt('Введите высоту треугольника');

    for(let i = 1; i <= h; i++) {
        let empt = '';
        let str8 = '';
        for(let j = 1; j <= h - i; j++) {
            empt += ' ';
        }
        for(let k = 1; k <= i * 2 - 1; k++) {
            str8 += '*';
        }
        //console.log(empt + str8);
        document.write(`<pre>${empt + str8}</pre>`);
    }
}
f8();
*/

/*
// Обратный треугольник не получается
function f8_2() {
    let h = +prompt('Введите высоту обратного треугольника');

    for(let i = 1; i <= h; i++) {
        let empt = '';
        let str8 = '';

        for(let j = 1; j <= h - i; j++) {
            str8 += '*';
        }

        for(let k = 1; k <= i * 2 - 1; k++) {
            empt += ' ';
        }
        document.write(`<pre>${empt + str8}</pre>`);
    }


    // for(let i = h; i >= 1; i--) {
    //     let empt = '';
    //     let str8 = '';
            
    //     for(let j = i * 2 - 1; j >= h; j--) {
    //         str8 = 
    //     }
    // }
}
f8_2();

*/

/*
// Задача 9
function f9(num) {
    let arr = [];
    for(let i = 0; i < num; i++) {
        if( i === 0 || i === 1) arr[i] = 1;
        else arr.push(arr[i-2] + arr[i-1]);
        if(arr[i] > 1000) break;  // включил ограничение, но почему-то вывелось ещё одно число после 1000
    }
    return arr;

}

console.log(f9(1000));
// ещё не совсем понимаю как делать вывод того же массива в самой функции, например после return . Чтобы можно было вызвать функцию и сразу выводился нужный массив

*/

/*
// Задача 10
// Тоже не работает. Почему возвращается undefined?

let a = prompt('Введите число');

function f10() {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += +a[i];
    }
    if (sum > 9) {
        a = sum;
        f10();
    } else {
    return sum;
    }
}
console.log(f10());
*/

/*
// Задача 11
// Тоже ошибка
function f11(array) {
    if (array[i] < array.length) {
        console.log(array[i]);
        i++;

        f11();
    }
}

let i = 0;
f11([1, 45, 78, 15, 3, 95, 89, 34]);
*/

/*
// Задача 11
// Повтор
function f11(array) {
    console.log(array[i]);

    i++;
    if (i < array.length) f11();
}

let i = 0;
f11([1, 45, 78, 15, 3, 95, 89, 34]);
*/

/*
// Задача 11
// Дубль 3. Заработал, но всё равно остались вопросы, хотя и пересматривал видео-урок
function f11(array) {
    console.log(array[i]);

    i++;
    if (i < array.length) f11(array);
}

let i = 0;
f11([1, 45, 78, 15, 3, 95, 89, 34]);
*/


// Задача 12
//Рамка строится, но немного кривая
function f12() {
let name = prompt('Как вас зовут?');
let surName = prompt('Введите вашу фамилию');
let lastName = prompt('Введите ваше отчество');
let group = prompt('Введите номер вашей группы');

let s1 = 'Домашняя работа: «Функции»',
    s2 = 'Выполнил: студент гр.' + group,
    s3 = surName + ' ' + name + ' ' + lastName;
let len = 0,
    s4 = '';

if (s1.length > s2.length) len = s1.length;
else if (s2.length > s1.length) len = s2.length;
else len = s2.length;

if (s3.length > len) len = s3.length;

for(let i = 1; i <= len+4; i++) {
    s4 += '*';
}

console.log(s4);
console.log('* ' + s1 + ' *');
console.log('* ' + s2 + ' *');
console.log('* ' + s3 + ' *');
console.log(s4);

}

f12();


// Задача 13