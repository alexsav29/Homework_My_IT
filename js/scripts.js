// Преимущество JS - то что это язык с динамической типизацией (тип переменной зависит от того что в ней находится)

// Массивы в JS могут хранить данные любых типов
//let arr = [1, 2, 34, 'gtfed', [1, 3, '456'], b];

// Как вообще можно перебрать массив?
// Для начала создадим его и заполним числами
// Более того можно сделать двумерный массив (так сказать таблицу умножения)

// let arr = [];

/*
// ДЗ 4 (Задача 7)

while(true) { // можно вместо true писать 1 (это как бесконечный цикл)
    let num = prompt('Введите число');
    if(isNaN(num)) { // проверяем введённое значение на "не число"
        alert('Вы ввели не число');
        continue;
    } 

    if (num === '') { // проверяем введённое значение на "пустую строку"
        break;
    }

    arr.push(+num); // после проверок пушим каждое новое значение в конец массива, перед этим преобразовав значение в число
}

arr.sort(function(a,b) {
    return a - b; // в таком случае сортировка будет по возрастанию. Если b - a   то по убыванию
}); // сортируем массив по порядку
// но у сортировки есть нюанс. Она работает по принципу "быстрой сортировки" - это когда берутся первые значения и сравниваются
// в метод .sort() можно передать некоторую инструкцию (функцию), чтобы сортировка шла как надо
// Есть у функций такая инструкция как return  - возвращать

console.log(arr);


// Сортировка букв идёт по схожему принципу. Сравнивается не сам символ, а специальный клод символа (Unicode)

*/

/*
// ДЗ 4 (Задача 10)

let arr = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
let firstIndex = arr.indexOf(0),
    lastIndex = arr.lastIndexOf(0),
    summ = 0;

if (firstIndex === lastIndex) {
    console.log(summ);
} else {
    for (let i = firstIndex; i < lastIndex; i++) {
        summ += arr[i];
    }
    console.log(summ);
}
*/


/*
// ДЗ 4 (Задача 11)

let h = +prompt('Высота пирамидки');

for(let i = 1; i <= h; i++) {
    let str = '';
    let p = '';

    for(let j = 0; j < h - i; j++) {
        str += ' ';
    }

    for (let a = 0; a < i * 2 - 1; a++) {
        p += '^';
    }

    document.write(`<pre>${str + p}</pre>`); // косые кавычки `` - шаблонные строки. Они поддерживают интерполяцию, т.е. возможность писать внутри строки какие-то выражения. Интерполяция создаётся с помощью знака $ и фигурных скобок {} . Т.е. ${}
// И внутри скобок мы можем писать любое выражение, т.е. JavaScript-код
// Тег <pre></pre>  - форматированный текст
}

*/


// Теперь можно про массивы

// Методы .push() и .pop() , .unshift() и .shift()  ,  .splice() и .slice() 

// Метод .slice()

//*** Напрмиер, задача сделать все буквы в строке заглаными
/*
let str = 'hello world';

str = str.split(' '); // метод .split() преобразует строку в массив по маркерному разделителю, указываемому в скобках
for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1);  // .toUpperCase() - метод для работы со строками, для перевода символа в верхний регистр
}

str = str.join(' ');
console.log(str);
*/


// Спред-оператор (оператор расширения)         [... ]
// Этот оператор хорошо себя раскрывает при работе со сложными методами, типо .map() , .reduce() и т.д.

let arr1 = [1, 2, 3]; // если сюда что-то пушить (.push())
let arr2 = arr1; // то здесь arr2 тоже изменится, потому что здесь хранится ссылка на arr1
let arr3 = [... arr1]; // а уже здесь создался новый массив(квадратные скобки). Т.е. спред-оператор поэлементно перенёс arr1. И этот массив не изменится при пушинге в arr1. Т.е. arr3 - это независимый массив, а arr2 - ссылка на arr1
// эти три точки это и есть спред-оператор (оператор расширения)
// спред-оператор позволяет разобрать одну структуру, если её можно прогнать через цикл, и собрать в другую

// если взять строку и прогнать её через спред-оператор, то он разложит её на массив символов
// let s = 'qwert'
// [... s]
// получится ["q", "w", "e", "r", "t", "y"]

// Оператор расширения (спред-оператор) пожходит для того чтобы что-то переделать в другое
// обратно массив в строку уже перегоняем при помощи метода .join()

// Примеры работы со спред-оператором
// например есть несколько элементов на странице с одинаковыми класами.
// Это по сути список, не массив. И мы не можем применить к ним методы для работы с массивами
// А применив спред-оператор [... ] можем перегнать их в массив и уже работать с ними как с массивом

// В общем спред-оператор (оператор расширения) часто применяется



// Пример того, что можно делать
// У преподавателя на парах баловались (изменяли размер текста, так чтобы он сам скокал - делался то большим, то снова принимал свой размер)
// Создадим 8 параграфов в html-документе
/*
let elems = document.querySelectorAll('p');

console.log(elems);

[...elems].map(function (elem) {
    setInterval(function () {
        elem.style.fontSize = Math.floor(Math.random() * (50 - 10) + 10) + 'px';
    }, 100);
});
*/



// Запись 
// let arr3 = [... arr1];
// равносильна тому, если бы мы записали цикл ниже

let arr3_2 = [];
for (let i = 0; i < arr1.length; i++) {
    arr3_2.push(arr1[i]);
}

// Выше, это упрощённый вариант работы спред-оператора [... ]
// Вообще он на порядок сложнее

// !!! Спред-оператор [... ] зачастую использзуется в ситуациях когда нужно применить какой-то метод массива к структуре, которая массивом не является


// Следующее
// Про массивы
// Массив он как бы является структурой
// И бывыают ситуации, когда нам нужно обращаться к элементам массива не по индексам, а по имени переменной (будут создаваться переменные)
// Т.е. есть такое понятие как деструктуризация
// Допустим у нас есть

let user = ['Иванов', 'Иван', 'Иванович'];
// И как бы не очень круто обращаться к пользователю (к этим элементам) user[0], user[1] и т.д.
// Для этого можно использовать деструктуризацию (довольно часто используется на практике)
// Можно сделать

let [name, surname, lastname] = user;   // теперь каждый элемент массива попадёт в нужную переменную
console.log(name); // Иванов
console.log(surname); // Иван
console.log(lastname); // Иванович

// Важный момент при деструктуризации массивов - соблюдать порядок переменных (переменные будут идти по порядку)
// Деструктуризация была введена в стандарте 2015 года
// Ещё если хочешь пропустить какой-то элемент и не присваивать ему имя переменной, то можно просто его пропустить и оставить пустое место после запятой let [name, , lastname] = user; 
// Либо ещё так с использованием спред-оператора     let [name, ...lastname] = user;    тогда вторая переменная будет хранить массив

// Плюс благодаря спред-оператору появилась возможность своппинга или сваппинга
let a = 3;
    b = 6;
// И как теперь сделать чтобы переменная a была равна 6, а переменная b была равна 3
[a, b] = [b, a]; // и теперь a = 6, b = 3  . Такая вещь хорошо подходит для смены местами переменных


// !!! Ещё часто используемые методы .forEach() , .find() , .filter() , .every() , .some(), .map(), .reduce() , .reduceRight()  - сложные методы, которые принимают в качестве параметра функцию

// .every()  - вернёт true если все элементы массива удовлетворяют условию
// .some()  - вернёт true если ХОТЯ БЫ ОДИН ИЗ элементов массива удовлетворяют условию
// .filter()  - вернёт новый массив с элементами, которые удовлетворяют условиям


// Допустим у нас есть каакой-то массив чисел
let nums = [2, 34, 234, 34, 3, 1, 45, 65, 32];

// И нам из этого массива нужно выбросить все нечётные числа
// Если мы не знаем методов массивов, можно делать через ещё один массив и цикл
let numsNew = [];
for(let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        numsNew.push(nums[i]); 
    }
}
console.log(numsNew);

// Ситуация когда нам что-то нужно выбросить из массива часто встречается. Та же самая ситуация когда нужно что-то удалить из корзины на сайте)

// Часто объект называют ассоциативным массивом
// Если брать массив, то унего есть индекс и значения
// У объекта (ассоциативный массив) есть ключ и значение

// И когда мы добавляем каакой-то товар (объект) этот объект перемещается в массив корзину
// Мы положили товар, по ключу указали количество и дальше нажимаем кнопку отправить
// И этот массив корзины улетает в обработку

// А теперь как эта задача по выбрасыванию элементов из массива решается через метод .filter()
nums = nums.filter(num => num % 2 === 0);  // здесь в скобках стрелочная функция (она тоже анонимная)
console.log(nums);

// ананалог стрелочной функции был бы
nums = nums.filter(function(num) {
    return num % 2 === 0
});


// Это анониманя функция (у неё нет имени)
//  function () {
//    
//  }

// это обычная функция (именованная)
//  function name() {
//      
//  }

// У стрелочных функций есть свои плюсы и недостатки

// Так же ещё про циклы
// Есть цикл for of и for in

// Первый вариант for in - пробегается по ключам (чаще используется при работе с объектами, когда нам необходимо пробежаться по объекту). И он выведет список ключей (от 0 до 4). Здесь можно объекты, массивы или строки быстро перебрать по индексам
for (let key in nums) {
    console.log(key);
}

// Второй вариант for of - так называемый цикл-итератор. Он позволяет вывести значения каждого элемента объекта, который можно перебрать через обычный цикл for (строки, массивы). Здесь можно довольно перебрать строку по символам
for (const num of nums) {
    console.log(num);
}