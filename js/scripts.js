/*
// Задача 1
let name = prompt("Введите Ваше имя"),
  age = +prompt("Введите Ваш возраст"),
  city = prompt("Введите Ваш город проживания"),
  phone = prompt("Введите ваш номер телефона"),
  email = prompt("Ведите ваш адрес электронной почты"),
  company = prompt("Введите название вашей компании");

document.write("Задача 1 <br />");
document.write(
  "Меня зовут " +
    name +
    ". Мне " +
    age +
    " лет. Я проживаю в городе " +
    city +
    " и работаю в компании " +
    company +
    ". Мои контактные данные: " +
    phone +
    " , " +
    email
);

// Задача 2
document.write("Задача 2 <br />");
let birthYear = 2023 - age;

document.write(name + " родился в " + birthYear + " году");

*/

// Задача 3 - не работает
document.write("Задача 3 <br />");
let str3 = prompt("Введите строку из 6 цифр");
if (+str3[0] + +str3[1] + +str3[2] === +str3[3] + +str3[4] + +str3[5]) {
  document.write("Да, сумма чисел слева равна сумме чисел справа");
} else {
  document.write("Нет, сумма чисел слева не равна сумме чисел справа");
}

/*

// Задача 4
{
  document.write("Задача 4 <br />");

  let a = +prompt("Введите значение a");

  if (a > 0) {
    document.write("Верно. Значение a больше нуля <br /> <br />");
  } else {
    document.write("Неверно. Значение a не больше нуля <br /> <br />");
  }
}

// Задача 5

let a = 10,
  b = 2;
document.write("Задача 5 <br />");
document.write("Сумма a и b: " + (a + b) + "<br />");
document.write("Разность a и b: " + (a - b) + "<br />");
document.write("Произведение a и b: " + a * b + "<br />");
document.write("Частное a и b: " + a / b + "<br />");

if (a + b > 1) {
  document.write(
    "Сумма a и b больше 1. Квадрат их суммы равен: " +
      (a + b) ** 2 +
      "<br /><br />"
  );
} else {
  document.write("Сумма a и b меньше 1 <br /><br />");
}

// Задача 6
document.write("Задача 6 <br />");

if (a > 2 || a < 11 || (b >= 6 && b < 14)) {
  document.write("Верно <br /><br />");
} else {
  document.write("Неверно <br /><br />");
}

// Задача 7
document.write("Задача 7 <br />");

let n = +prompt("Введите значение n");

if (n >= 0 && n <= 15) {
  document.write("Значение n находится в первой четверти часа");
} else if (n >= 16 && n <= 30) {
  document.write("Значение n находится во второй четверти часа");
} else if (n >= 31 && n <= 45) {
  document.write("Значение n находится в третьей четверти часа");
} else if (n >= 46 && n <= 59) {
  document.write("Значение n находится в четвёртой четверти часа");
} else {
  document.write("Число n не входит в диапозон между 0 и 59");
}
document.write("<br /> <br />");

// Задача 8
document.write("Задача 8 <br />");
let day = +prompt("Введите число месяца от 1 до 31");

if (day >= 1 && day <= 10) {
  document.write("День находится в первой декаде месяца");
} else if (day >= 11 && day <= 20) {
  document.write("День находится во второй декаде месяца");
} else if (day >= 21 && day <= 31) {
  document.write("День находится в третьей декаде месяца");
} else {
  document.write("Вы ввели число месяца вне диапазона от 1 до 31");
}

document.write("<br /> <br />");



// Задача 9
document.write("Задача 9 <br />");

let day_9 = +prompt("Введите количество дней");

let years, months, weeks, hours, minutes, sec;

if (day_9 < 1) {
  document.write("Вы ввели количество дней меньше 1 <br />");
}

if (day_9 >= 1) {
  document.write("Количество дней: " + day_9 + " дней" + "<br />");
}

if (day_9 < 365) {
  document.write("Меньше года <br />");
  years = 0;
} else if (day_9 >= 365) {
  years = day_9 / 365;
  document.write("Количество лет: " + years + " лет" + "<br />");
}

if (day_9 < 31) {
  document.write("Меньше месяца <br />");
  months = 0;
} else if (day_9 >= 31) {
  months = day_9 / 31;
  document.write("Количество месяцев: " + months + " месяцев" + "<br />");
}

if (day_9 < 7) {
  document.write("Меньше недели <br />");
  weeks = 0;
} else if (day_9 >= 7) {
  weeks = day_9 / 7;
  document.write("Количество недель: " + weeks + " недель" + "<br />");
}

if (day_9 >= 1) {
  hours = day_9 * 24;
  document.write("Количество часов: " + hours + " часов" + "<br />");
}

if (day_9 >= 1) {
  minutes = day_9 * 24 * 60;
  document.write("Количество минут: " + minutes + " минут" + "<br />");
}

if (day_9 >= 1) {
  sec = day_9 * 24 * 60 * 60;
  document.write("Количество секунд: " + sec + " секунд" + "<br />");
}

document.write("<br /><br />");



// Задача 10
// В Задаче 8 интервал числа от 1 до 31. Как можно его использовать для этой задачи?
document.write("Задача 10 <br />");

let day_10 = +prompt("Введите день от 1 до 365");
let month_10;

if (day_10 < 0) {
  document.write("Вы ввели отрицательное значение дня <br />");
} else if (day_10 == 0) {
  document.write("Вы ввели ноль <br />");
} else if (day_10 > 365) {
  document.write(
    "Вы ввели значение больше 365. Введите значение от 1 до 365 <br />"
  );
} else if (day_10 >= 1 && day_10 <= 31) {
  month_10 = 1;
  document.write("Январь <br />");
} else if (day_10 >= 32 && day_10 <= 59) {
  month_10 = 2;
  document.write("Февраль <br />");
} else if (day_10 >= 60 && day_10 <= 90) {
  month_10 = 3;
  document.write("Март <br />");
} else if (day_10 >= 91 && day_10 <= 120) {
  month_10 = 4;
  document.write("Апрель <br />");
} else if (day_10 >= 121 && day_10 <= 151) {
  month_10 = 5;
  document.write("Май <br />");
} else if (day_10 >= 152 && day_10 <= 181) {
  month_10 = 6;
  document.write("Июнь <br />");
} else if (day_10 >= 182 && day_10 <= 212) {
  month_10 = 7;
  document.write("Июль <br />");
} else if (day_10 >= 213 && day_10 <= 243) {
  month_10 = 8;
  document.write("Август <br />");
} else if (day_10 >= 244 && day_10 <= 273) {
  month_10 = 9;
  document.write("Сентябрь <br />");
} else if (day_10 >= 274 && day_10 <= 304) {
  month_10 = 10;
  document.write("Октябрь <br />");
} else if (day_10 >= 305 && day_10 <= 334) {
  month_10 = 11;
  document.write("Ноябрь <br />");
} else if (day_10 >= 335 && day_10 <= 365) {
  month_10 = 12;
  document.write("Декабрь <br />");
}

switch (month_10) {
  case 12:
  case 1:
  case 2:
    document.write("Зима <br />");
    break;

  case 3:
  case 4:
  case 5:
    document.write("Весна <br />");
    break;

  case 6:
  case 7:
  case 8:
    document.write("Лето <br />");
    break;

  case 9:
  case 10:
  case 11:
    document.write("Осень <br />");
    break;
}

*/
