const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Вячеслав",
            "id_6": "Виктор",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Семён"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Любовь",
            "id_2": "Надежда",
            "id_3": "Вера",
            "id_4": "Ольга",
            "id_5": "Елена",
            "id_6": "Екатерина",
            "id_7": "Анна",
            "id_8": "Ксенья",
            "id_9": "Олеся",
            "id_10": "Анна"
        }
    }`,
    employmentMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Сантехник",
            "id_2": "Слесарь",
            "id_3": "Монтажник",
            "id_4": "Програмист",
            "id_5": "Бухгалтер",
            "id_6": "Учитель",
            "id_7": "Менеджер",
            "id_8": "Инженер",
            "id_9": "Самозанятый",
            "id_10": "Безработный"
        }
    }`,    
    employmentFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Косметолог",
            "id_2": "Парикмахер",
            "id_3": "Секретарь",
            "id_4": "Програмист",
            "id_5": "Бухгалтер",
            "id_6": "Учитель",
            "id_7": "Менеджер",
            "id_8": "Шеф-повар",
            "id_9": "Швея",
            "id_10": "Домохозяйка"
        }
    }`,
    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,
    
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
// Рандомный номер
    randomIntNumber: (max = 1, min = 0) => Math.round(Math.random() * (max - min) + 1),

// Метод выбора рандомного значения из списка Json
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

// Рандомный пол
    randomGender: function(){
        const gender = Math.round(Math.random());
        return (gender) ? this.GENDER_MALE : this.GENDER_FEMALE ;
    },

// Рандомное имя
    randomFirstName: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        }
        else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

// Рандомная фамилия
    randomSurname: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.surnameJson);
        }
        else {
            return this.randomValue(this.surnameJson) + 'а';
        }
    },

// Рандомное отчество
    randomPatronymic: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson) + 'ович';
        }
        else {
            return this.randomValue(this.firstNameMaleJson) + 'овна';
        }
    },

// Рандомный род занятий
    randomEmployment: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.employmentMaleJson);
        }
        else {
            return this.randomValue(this.employmentFemaleJson);
        }
    },

// Рандомная дата рождения
    randomBirthDay: function() {
        const year = 2023 - (18 + this.randomIntNumber(55, 18));
        const month = this.randomValue(this.monthJson);
        const day = () => {
            if (month == 'февраля') {
                return this.randomIntNumber(28, 1);
            }
            else {
                if (month == 'апреля' || month == 'июня' || month == 'сентября' || month == 'ноября') {
                    return this.randomIntNumber(30, 1);
                }
                else {
                    return this.randomIntNumber(31, 1);
                }
            }
        };
        return day() + ' ' + month + ' ' + year;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.employment = this.randomEmployment();
        this.person.birthDay = this.randomBirthDay();
        return this.person;
    }
};