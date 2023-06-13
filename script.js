// Вопрос 1. Как правильно сделать обводку у текста в правой части 'Initially designed to' ? По-моему у меня получилось не совсем похоже на макет.

// Вопрос 2. Почему у основного блока content скругление с границей добавляется шире, по размеру врапера? Хотя при добавлении тени (если её перенести .content), она добавляются нормально.

// Вопрос 3. Как сделать так, чтобы вся кнопка была ссылкой и работала при наведении и нажатии, а не только текст? Немного подзабыл. 
// Помню, что вы говорили, что нельзя вовнутрь ссылки вкладывать блок. Хотя по-моему как-то так работало. Но пробовал сейчас так сделать и почему-то ссылка стала активна и за пределами кнопки. Вернул всё обратно.

// Вопрос 4. Не смог найти в Figma размеры скруглений. Раньше, по-моему, был там где Stroke. Если нажать на 3 точки, там есть какой-то угол, но при изменении величины ничего не меняется. Я так понимаю, это не то.

let html = document.querySelector('html');
html.setAttribute('lang', 'en');

let meta1 = document.createElement('meta');
meta1.setAttribute('charset', 'UTF-8');
document.head.appendChild(meta1);

let meta2 = document.createElement('meta');
meta2.setAttribute('name', 'viewport');
meta2.setAttribute('content', 'width=device-width, initial-scale=1.0');
document.head.appendChild(meta2);

let meta3 = document.createElement('meta');
meta3.setAttribute('name', 'author');
meta3.setAttribute('content', 'Alexander Savenkov');
document.head.appendChild(meta3);

let meta4 = document.createElement('meta');
meta4.setAttribute('name', 'description');
meta4.setAttribute('content', 'JS. Homework #8. Работа с BOM и DOM.')
document.head.appendChild(meta4);

let link1 = document.createElement('link');
link1.setAttribute('rel', 'preconnect');
link1.setAttribute('href', 'https://fonts.googleapis.com');

let link2 = document.createElement('link');
link2.setAttribute('rel', 'preconnect');
link2.setAttribute('href', 'https://fonts.gstatic.com');
link2.setAttribute('crossorigin', ''); // здесь была ошибка. Браузер ругался, что не добавлен второй аргумент (значение атрибута). Как добавлять атрибут, если у него нет значения? Так как сделал Я?

let link3 = document.createElement('link');
link3.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap');
link3.setAttribute('rel', 'stylesheet');

document.head.append(link1, link2, link3);


let title = document.createElement('title');
title.innerHTML = 'JS. Homework #8. Работа с BOM и DOM';
document.head.appendChild(title);

let styles = document.createElement('style');
styles.innerHTML = `
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #fff;
    }

    .wrapper {
        width: 70%;
        max-width: 1280px;
        margin: 100px auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 55px;
    }

    .header .h2 {
        font-family: 'Arvo', serif;
        font-size: 36px;
        line-height: 48px;
        font-weight: 400;
        color: background: #212121;
        
    }

    .header .p1 {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        line-height: 26px;
        color: #9FA3A7;
        margin-top: 10px;
        
    }

    .content {
        display: flex;
        justify-content: center;
        border: 1px solid #E8E9ED;
        border-radius: 7px;
    }

    .content-header1 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        margin-top: 81px;
        margin-bottom: 19px;
        text-transform: uppercase;
    }

    .content-header2 {
        font-family: 'Arvo', serif;
        font-size: 36px;
        line-height: 46px;
        font-weight: 400;
        width: 210px;
        text-align: center;
        margin-bottom: 25px;
    }

    .paragraph {
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
        line-height: 22px;
        width: 210px;
        text-align: center;
    }

    .button {
        width: 146px;
        height: 46px;
        margin-top: 64px;
        margin-bottom: 94px;
        text-align: center;
        border: 3px solid #FFC80A;
        border-radius: 30px;
        
    }

    .button a {
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        line-height: 46px;
    }

    .left-side {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #FFFFFF;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        padding: 0 96px;
    }

    .left-side .content-header1 {
        color: #9FA3A7;
    }

    .left-side .paragraph {
        color: #9FA3A7;
    }

    .left-side .button a {
        color: #212121;
    }

    .right-side {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #8F75BE;
        padding: 0 96px;
    }

    .right-side .content-header1 {
        color: #FFC80A;
    }

    .right-side .content-header2 {
        color: #fff;
        text-shadow: 1px 0 0 #000; 
    }

    .right-side .paragraph {
        color: #FFFFFF;
    }

    .right-side .button a {
        color: #FFFFFF;
    }

`;
document.head.appendChild(styles);

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

let header = document.createElement('div'); // Основной заголовок
header.classList.add('header');
wrapper.appendChild(header);

let h2 = document.createElement('h2');
h2.innerHTML = 'Choose Your Option';
h2.classList.add('h2');

let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p1.classList.add('p1');
header.append(h2, p1);



let content = document.createElement('div');    // Контент
content.classList.add('content');
wrapper.appendChild(content);


let contentLeft = document.createElement('div');    // Левая часть
contentLeft.classList.add('left-side');
let pLeftHeader1 = document.createElement('p');
pLeftHeader1.classList.add('content-header1');
pLeftHeader1.innerHTML = 'Freelancer';

let pLeftHeader2 = document.createElement('h3');
pLeftHeader2.classList.add('content-header2');
pLeftHeader2.innerHTML = 'Initially designed to';

let pLeft = document.createElement('p');
pLeft.classList.add('paragraph');
pLeft.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

let buttonLeft = document.createElement('div');
buttonLeft.classList.add('button');
buttonLeft.classList.add('button-left');
// buttonLeft.innerHTML = '<a href="#">Start here</a>';
let aLeft = document.createElement('a');
aLeft.setAttribute('href', '#');
aLeft.innerHTML = 'Start here';
buttonLeft.appendChild(aLeft);
contentLeft.append(pLeftHeader1, pLeftHeader2, pLeft, buttonLeft);


let contentRight = document.createElement('div');   // Правая часть
contentRight.classList.add('right-side');
let pRightHeader1 = document.createElement('p');
pRightHeader1.classList.add('content-header1');
pRightHeader1.innerHTML = 'Studio';

let pRightHeader2 = document.createElement('h3');
pRightHeader2.classList.add('content-header2');
pRightHeader2.innerHTML = 'Initially designed to';

let pRight = document.createElement('p');
pRight.classList.add('paragraph');
pRight.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

let buttonRight = document.createElement('div');
buttonRight.classList.add('button');
buttonRight.classList.add('button-right');
// buttonLeft.innerHTML = '<a href="#">Start here</a>';
let aRight = document.createElement('a');
aRight.setAttribute('href', '#');
aRight.innerHTML = 'Start here';
buttonRight.appendChild(aRight);
contentRight.append(pRightHeader1, pRightHeader2, pRight, buttonRight);

content.append(contentLeft, contentRight);