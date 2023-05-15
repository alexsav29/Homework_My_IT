// JS. ДЗ 3 (ver.2)
/*
// Задача 1
document.write('<h2>Задача 1 <br /></h2>');
document.write('<h3>Вывод чисел от 1 до 50: <br /></h3>');
for(let i = 1; i <= 50; i++) {
    
    document.write(i + '<br />');
}

document.write('<h3> Вывод чисел от 35 до 8: <br /> </h3>');

for(let i = 35; i >= 8; i--) {
    document.write(i + '<br />');
}

// Задача 2
document.write('<h2>Задача 2 <br /></h2>');
document.write('<h3>Вывод чисел в столбик от 89 до 11: <br /></h3>');

let a = 89;
while(a >= 11) {
    document.write(a + '<br />');
    a--;
}

// Задача 3
document.write('<h2>Задача 3 <br /></h2>');
document.write('<h3>Находим сумму чисел от 0 до 100: <br /></h3>');
let sum = 0;

for(let i = 0; i <= 100; i++) {
   sum += i;
   
}

document.write('Сумма чисел от 0 до 100 равна: ' + sum + '<br />');


// Задача 4
document.write('<h2>Задача 4 <br /></h2>');
document.write('<h3>Находим сумму чисел в каждом числе от 1 до 5: <br /></h3>');
let sum_4 = 0;

for(let i=1; i <= 5; i++){
    sum_4 = 0;
    for(let j=1; j <= i; j++) {
        sum_4 += j;
    }
    document.write('Сумма чисел в числе ' + i + ' : ' + sum_4 + '<br />');
}

// Задача 5
document.write('<h2>Задача 5 <br /></h2>');
document.write('<h3>Выводим чётные числа от 8 до 56 (через while): <br /></h3>');
let z = 8;
while (z<=56) {
    if (z%2 == 0) {
        document.write(z + '<br />');
    }
    z++;
}

document.write('<h3>Выводим чётные числа от 8 до 56 (через for): <br /></h3>');

for(let i=8; i <= 56; i++) {
    if (i%2 !== 0) continue;
     {
        document.write(i + '<br />');
    }
}

// Задача 6
document.write('<h2>Задача 6 <br /></h2>');
document.write('<h3>Выводим таблицу умножения от 2 до 10: <br /></h3>');

for(let i=2; i <= 10; i++) {

    for(let j=1; j <= 10; j++) {
        document.write(i + '*' + j + ' = ' + (i*j) + '<br />');
    }
    document.write('... <br />');
}

// Задача 7
document.write('<h2>Задача 7 <br /></h2>');
//document.write('<h3>: <br /></h3>');

let n = 1000;
let num = 0;

for(let i=1; i <= 1000; i++) {
    if((n/=2) > 50) 
    {
        num++;
        document.write('Получится число: ' + n + '<br />');
    } 
}

// document.write('Получится число: ' + n + '<br />');  // Не могу понять почему, если делать вывод в этом месте в выводе получается число  9.332636185032189e-299
document.write('Количество итераций: ' + num + '<br />');

// Задача 8 - не получилась проверка на ввод строк
document.write('<h2>Задача 8 <br /></h2>');
//document.write('<h3>: <br /></h3>');
let b;
let sum_8 = 0;
let i=1;

for(; ; i++) {
  b = +prompt('Введите число');
  sum_8 += b;

  if(typeof b === 'string') { // почему-то не работает
    console.log('Вы ввели строку');
  }

  if(b == '' || b == 0) {
    break;
  }
  
}

let sredArifm = sum_8 / i;
document.write('Сумма введённых чисел: ' + sum_8 + '<br />');
document.write('Среднее арифметическое введённых чисел: ' + sredArifm + '<br />');

*/

// Задача 9 - получилось только так, но не работает
document.write('<h2>Задача 9 <br /></h2>');
//document.write('<h3>: <br /></h3>');

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let bigNum = 0;

for(let i=0; i <= 100; i++) {
    if(str[i] == '') continue;
    if (bigNum < +str[i]) {
        bigNum += +str[i];
    }
}

console.log(bigNum);


// Задача 10 - не получилось
document.write('<h2>Задача 10 <br /></h2>');
//document.write('<h3>: <br /></h3>');

let n = prompt('Введите число');

