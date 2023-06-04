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

contactsBook.createNewContact();