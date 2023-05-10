let S = 2000000,
  p = 0.1,
  years = 5,
  months,
  i,
  ezhemesPlatez,
  Pereplata;

// i — процентная ставка по займу в месяц.
i = p / 12;

// months - срок кредита в месяцах
months = years * 12;

// ezhemesPlatez - ежемесячный платёж
ezhemesPlatez = S * ((i * (1 + i) ** months) / ((1 + i) ** months - 1));

Pereplata = months * ezhemesPlatez - S;
console.log("Переплата по кредиту составит", Pereplata, "млн.руб");

// источник для формул https://mobile-testing.ru/kak_rasshitat_pereplatu_po_kreditu/
