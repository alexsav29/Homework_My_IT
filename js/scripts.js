let Contact = function() {
    this.createNewContact = function() {
        this.name = prompt('Введите имя контакта');
        this.surname = prompt('Введите фамилию контакта');
        this.lastname = prompt('Введите отчество контакта');
        this.age = +prompt('Введите возраст контакта');
        this.phone = prompt('Введите номер телефона контакта');
        this.email = prompt('Введите эл.почту контакта');
        this.job = prompt('Место работы');
        this.meetingPlace = prompt('Где и как познакомились');
        
        this.checkInfo();
    }

    this.checkInfo = function() {

        while(true) {
            if (this.name != '') break;
            if (this.name == '') {
                alert('Вы не ввели имя')
                this.name = prompt('Введите имя контакта');
            }
        }

        while(true) {
            if (this.surname != '') break;
            if (this.surname == '') {
                alert('Вы не ввели фамилию')
                this.surname = prompt('Введите фамилию контакта');
            }
        }

        while(true) {
            if (this.lastname != '') break;
            if (this.lastname == '') {
                alert('Вы не ввели отчество')
                this.lastname = prompt('Введите отчество контакта');
            }
        }



        while(true) {
            if (this.age != '') break;
            if (this.age == '') {
                alert('Вы не ввели возраст')
                this.age = +prompt('Введите возраст контакта');
            }
        }

        while(true) {
            if (Number.isInteger(this.age)) break;
            if (!Number.isInteger(this.age)) {
                alert('Вы ввели дробное значение возраста. Попробуйте ещё раз');
                this.age = +prompt('Введите возраст контакта');
            }
        }

        while(true) {
            if (this.age >= 0) break;
            if (this.age < 0) {
                alert('Вы ввели отрицательное значение возраста. Попробуйте ещё раз');
                this.age = +prompt('Введите возраст контакта');
            }
        }



        while(true) {
            if (this.phone != '') break;
            if (this.phone == '') {
                alert('Вы не ввели номер телефона')
                this.phone = prompt('Введите номер телефона контакта');
            }
        }

        while(true) {
            if (this.email != '') break;
            if (this.email == '') {
                alert('Вы не ввели эл.почту')
                this.email = prompt('Введите эл.почту контакта');
            }
        }

        while(true) {
            if (this.job != '') break;
            if (this.job == '') {
                alert('Вы не ввели место работы')
                this.job = prompt('Место работы');
            }
        }

        while(true) {
            if (this.meetingPlace != '') break;
            if (this.meetingPlace == '') {
                alert('Вы не ввели место и обстоятельства знакомства')
                this.meetingPlace = prompt('Где и как познакомились');
            }
        }


       
        

        this.show();
    }

    this.show = function() {
        //alert('Контакт: ' + this.surname + ' ' + this.name + ' ' + this.lastname + '\n ')
        alert(`Контакт: ${this.surname} ${this.name} ${this.lastname} \nВозраст: ${this.age} \nТелефон: ${this.phone} \nЭлектронная почта: ${this.email} \nМесто работы: ${this.job} \nГде и как познакомились: ${this.meetingPlace}`);
    }
}

 let contactsBook = new Contact;

// contactsBook.createNewContact();



// Функциональное наследование
let ScheduleBook = function(event) {
    Contact.apply(this, arguments);

    event = event;

    this.setEvent = function() {
        event = prompt('Введите название мероприятия');
    };

    this.getEvent = function() {
        return event;
    };
};

let scheduleBook = new ScheduleBook();
console.log(scheduleBook);
//scheduleBook.createNewContact();


// Прототипное наследование

let ScheduleBook2 = function() {

};

ScheduleBook2.prototype = contactsBook; // Можно ли записывать       ScheduleBook2.prototype = Contact;       или это будет ошибкой?
console.log(ScheduleBook2);


// --------------------------

// Реализация DOM

let Window = function() {
    this.create = function(tagName) {
        document.createElement(tagName);
    }; // create(‘tagName’) для создание и возврата новых элементов по имени тега;
    
    this.attr = function(element, name, value) {
        element.setAttribute(name, value);
    };   // attr(‘element’, ‘name’, [‘value’]) для добавления атрибута к элементу или возврата значения атрибута;
    
    this.html = function(element, value) {
        element.innerHTML(value);
    };   // html(‘element’, [‘value’]) для добавления любого содержимого внутрь элемента или его возврата;
    
    this.search = function(element, selector) {
        return selector;
    }; // search(‘element’, ‘selector’) для поиска и возврата найденных элементов внутри переданного или в document по селектору CSS.
    
    this.addClass = function(element, className) {
        element.classList.add(className);
    }; // addClass(‘element’, ‘className’) для добавления класса к элементу;
    
    this.removeClass = function(element, className) {
        element.removeClass(className);
    }; // removeClass(‘element’, ‘className’) для удаления класса из элемента;
    
    this.toggleClass = function(element, className) {
        element.toggleClass(className);
    }; // toggleClass(‘element’, ‘className’) для переключения класса в элементе;

    this.hasClass = function(element, className) {
        if (element.hasClass(className)) return true;
        else return false;
    }; // hasClass(‘element’, ‘className’) для проверки существования класса в элементе (должен вернуть true или false);
    
    this.append = function(element, newElement, beforeElement) {
        element.append(newElement, beforeElement);
    }; // append(‘element’, ‘newElement’, [‘beforeElement’]) для добавления новых элементов внутрь какого-либо после всего его содержимого, либо перед каким-то конкретным;
    
    this.on = function(element, eventName, funcName) {
        element.addEventListener(eventName, funcName);
    }; // on(‘element’, ‘eventName’, ‘funcName’) для добавления к элементу события и выполнения функции (проверьте доступность контекста this и event).
};

let windowDom = new Window();

windowDom.create('p');