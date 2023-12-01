let phraseRandom;
let answerPhrase;
let minValue;
let maxValue;

let minValueEnter;
let maxValueEnter;

let signWord;
let onesWord;
let tensWord;
let hundredsWord;
let answerNumberWord;

//Функция ввода
    minValueEnter = parseInt((prompt('Какое будет минимальное число? (от -999 до 999)','-999')) || -999);
    maxValueEnter = parseInt((prompt('Какое будет максимальное число? (от -999 до 999)','999')) || 999);
    if (999 >= minValueEnter >= -999 || 999 >= maxValueEnter >= -999) {
        if (maxValueEnter > minValueEnter) {
            minValue = (minValueEnter >= -999) ? minValueEnter : -999 ;
            maxValue = (maxValueEnter <= 999) ? maxValueEnter : 999 ;
        } else {
            minValue = (maxValueEnter >= -999) ? maxValueEnter : -999 ;
            maxValue = (minValueEnter <= 999) ? minValueEnter : 999 ;
        }
    } else {
        minValue = -999;
        maxValue = 999;
    }

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.round((minValue + maxValue) / 2);

//Функция перевода чисел в словестную форму
if (answerNumber < 0) {
    signWord = `минус `;
} else {
    signWord = ``;
}
answerNumberWord = Math.abs(answerNumber);
switch (Math.trunc(answerNumberWord/100)) {
    case 1 :
        hundredsWord = `сто `;
        answerNumberWord = answerNumberWord-100;
        break;
    case 2 :
        hundredsWord = `двести `;
        answerNumberWord = answerNumberWord-200;
        break;
    case 3 :
        hundredsWord = `тристо `;
        answerNumberWord = answerNumberWord-300;
        break;
    case 4 :
        hundredsWord = `четыресто `;
        answerNumberWord = answerNumberWord-400;
        break;
    case 5 :
        hundredsWord = `пятьсот `;
        answerNumberWord = answerNumberWord-500;
        break;
    case 6 :
        hundredsWord = `шестьсот `;
        answerNumberWord = answerNumberWord-600;
        break;
    case 7 :
        hundredsWord = `семьсот `;
        answerNumberWord = answerNumberWord-700;
        break;
    case 8 :
        hundredsWord = `восемьсот `;
        answerNumberWord = answerNumberWord-800;
        break;
    case 9 :
        hundredsWord = `девятьсот `;
        answerNumberWord = answerNumberWord-900;
        break;
    default:
        hundredsWord = ``;
}
switch (Math.trunc(answerNumberWord/10)) {
    case 2 :
        tensWord = `двадцать `;
        answerNumberWord = answerNumberWord-20;
        break;
    case 3 :
        tensWord = `тридцать `;
        answerNumberWord = answerNumberWord-30;
        break;
    case 4 :
        tensWord = `сорок `;
        answerNumberWord = answerNumberWord-40;
        break;
    case 5 :
        tensWord = `пятьдесят `;
        answerNumberWord = answerNumberWord-50;
        break;
    case 6 :
        tensWord = `шестьдесят `;
        answerNumberWord = answerNumberWord-60;
        break;
    case 7 :
        tensWord = `семьдесят `;
        answerNumberWord = answerNumberWord-70;
        break;
    case 8 :
        tensWord = `восемьдесят `;
        answerNumberWord = answerNumberWord-80;
        break;
    case 9 :
        tensWord = `девяносто `;
        answerNumberWord = answerNumberWord-90;
        break;
    default:
        tensWord = ``;
}
switch (Math.trunc(answerNumberWord)) {
    case 1 :
        onesWord = `один`;
        break;
    case 2 :
        onesWord = `два`;
        break;
    case 3 :
        onesWord = `три`;
        break;
    case 4 :
        onesWord = `четыре`;
        break;
    case 5 :
        onesWord = `пять`;
        break;
    case 6 :
        onesWord = `шесть`;
        break;
    case 7 :
        onesWord = `семь`;
        break;
    case 8 :
        onesWord = `восемь`;
        break;
    case 9 :
        onesWord = `девять`;
        break;
    case 10 :
        onesWord = `десять`;
        break;
    case 11 :
        onesWord = `одинадцать`;
        break;
    case 12 :
        onesWord = `двенадцать`;
        break;
    case 13 :
        onesWord = `тринадцать`;
        break;
    case 14 :
        onesWord = `четырнадцать`;
        break;
    case 15 :
        onesWord = `пятнадцать`;
        break;
    case 16 :
        onesWord = `шестнадцать`;
        break;
    case 17 :
        onesWord = `семнадцать`;
        break;
    case 18 :
        onesWord = `восемнадцать`;
        break;
    case 19 :
        onesWord = `девятнадцать`;
    default:
        onesWord = ``;
}
answerNumberWord = signWord + hundredsWord + tensWord + onesWord;
if (answerNumberWord == ``) {
    answerNumberWord = `0`;
}
if (answerNumberWord.length > 20) {
    answerNumberWord = answerNumber;
}

let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumberWord }?`;

// Для кнопки заново
document.getElementById('btnRetry').addEventListener('click', function () {
    
    //Функция ввода
    minValueEnter = parseInt((prompt('Какое будет минимальное число? (от -999 до 999)','-999')) || -999);
    maxValueEnter = parseInt((prompt('Какое будет максимальное число? (от -999 до 999)','999')) || 999);
    if (999 >= minValueEnter >= -999 || 999 >= maxValueEnter >= -999) {
        if (maxValueEnter > minValueEnter) {
            minValue = (minValueEnter > -999) ? minValueEnter : -999 ;
            maxValue = (maxValueEnter < 999) ? maxValueEnter : 999 ;
        } else {
            minValue = (maxValueEnter > -999) ? maxValueEnter : -999 ;
            maxValue = (minValueEnter < 999) ? minValueEnter : 999 ;
        }
    } else {
        minValue = -999;
        maxValue = 999;
    }
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
answerNumber  = Math.round((minValue + maxValue) / 2);

    //Функция перевода чисел в словестную форму
    if (answerNumber < 0) {
    signWord = `минус `;
    } else {
    signWord = ``;
    }
    answerNumberWord = Math.abs(answerNumber);
    switch (Math.trunc(answerNumberWord/100)) {
    case 1 :
        hundredsWord = `сто `;
        answerNumberWord = answerNumberWord-100;
        break;
    case 2 :
        hundredsWord = `двести `;
        answerNumberWord = answerNumberWord-200;
        break;
    case 3 :
        hundredsWord = `тристо `;
        answerNumberWord = answerNumberWord-300;
        break;
    case 4 :
        hundredsWord = `четыресто `;
        answerNumberWord = answerNumberWord-400;
        break;
    case 5 :
        hundredsWord = `пятьсот `;
        answerNumberWord = answerNumberWord-500;
        break;
    case 6 :
        hundredsWord = `шестьсот `;
        answerNumberWord = answerNumberWord-600;
        break;
    case 7 :
        hundredsWord = `семьсот `;
        answerNumberWord = answerNumberWord-700;
        break;
    case 8 :
        hundredsWord = `восемьсот `;
        answerNumberWord = answerNumberWord-800;
        break;
    case 9 :
        hundredsWord = `девятьсот `;
        answerNumberWord = answerNumberWord-900;
        break;
    default:
        hundredsWord = ``;
    }
    switch (Math.trunc(answerNumberWord/10)) {
    case 2 :
        tensWord = `двадцать `;
        answerNumberWord = answerNumberWord-20;
        break;
    case 3 :
        tensWord = `тридцать `;
        answerNumberWord = answerNumberWord-30;
        break;
    case 4 :
        tensWord = `сорок `;
        answerNumberWord = answerNumberWord-40;
        break;
    case 5 :
        tensWord = `пятьдесят `;
        answerNumberWord = answerNumberWord-50;
        break;
    case 6 :
        tensWord = `шестьдесят `;
        answerNumberWord = answerNumberWord-60;
        break;
    case 7 :
        tensWord = `семьдесят `;
        answerNumberWord = answerNumberWord-70;
        break;
    case 8 :
        tensWord = `восемьдесят `;
        answerNumberWord = answerNumberWord-80;
        break;
    case 9 :
        tensWord = `девяносто `;
        answerNumberWord = answerNumberWord-90;
        break;
    default:
        tensWord = ``;
    }
    switch (Math.trunc(answerNumberWord)) {
    case 1 :
        onesWord = `один`;
        break;
    case 2 :
        onesWord = `два`;
        break;
    case 3 :
        onesWord = `три`;
        break;
    case 4 :
        onesWord = `четыре`;
        break;
    case 5 :
        onesWord = `пять`;
        break;
    case 6 :
        onesWord = `шесть`;
        break;
    case 7 :
        onesWord = `семь`;
        break;
    case 8 :
        onesWord = `восемь`;
        break;
    case 9 :
        onesWord = `девять`;
        break;
    case 10 :
        onesWord = `десять`;
        break;
    case 11 :
        onesWord = `одинадцать`;
        break;
    case 12 :
        onesWord = `двенадцать`;
        break;
    case 13 :
        onesWord = `тринадцать`;
        break;
    case 14 :
        onesWord = `четырнадцать`;
        break;
    case 15 :
        onesWord = `пятнадцать`;
        break;
    case 16 :
        onesWord = `шестнадцать`;
        break;
    case 17 :
        onesWord = `семнадцать`;
        break;
    case 18 :
        onesWord = `восемнадцать`;
        break;
    case 19 :
        onesWord = `девятнадцать`;
    default:
        onesWord = ``;
    }
    answerNumberWord = signWord + hundredsWord + tensWord + onesWord;
    if (answerNumberWord == ``) {
        answerNumberWord = `0`;
    }
    if (answerNumberWord.length > 20) {
        answerNumberWord = answerNumber;
    }
    
orderNumber = 1;
gameRun = true;
    
orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumberWord }?`;
})

// Для кнопки больше
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            phraseRandom = Math.round( Math.random());
            answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber;
            answerNumber  = Math.round((minValue + maxValue) / 2);
            
            //Функция перевода чисел в словестную форму
            if (answerNumber < 0) {
        signWord = `минус `;
            } else {
        signWord = ``;
            }
            answerNumberWord = Math.abs(answerNumber);
            switch (Math.trunc(answerNumberWord/100)) {
        case 1 :
            hundredsWord = `сто `;
            answerNumberWord = answerNumberWord-100;
            break;
        case 2 :
            hundredsWord = `двести `;
            answerNumberWord = answerNumberWord-200;
            break;
        case 3 :
            hundredsWord = `тристо `;
            answerNumberWord = answerNumberWord-300;
            break;
        case 4 :
            hundredsWord = `четыресто `;
            answerNumberWord = answerNumberWord-400;
            break;
        case 5 :
            hundredsWord = `пятьсот `;
            answerNumberWord = answerNumberWord-500;
            break;
        case 6 :
            hundredsWord = `шестьсот `;
            answerNumberWord = answerNumberWord-600;
            break;
        case 7 :
            hundredsWord = `семьсот `;
            answerNumberWord = answerNumberWord-700;
            break;
        case 8 :
            hundredsWord = `восемьсот `;
            answerNumberWord = answerNumberWord-800;
            break;
        case 9 :
            hundredsWord = `девятьсот `;
            answerNumberWord = answerNumberWord-900;
            break;
        default:
            hundredsWord = ``;
            }
            switch (Math.trunc(answerNumberWord/10)) {
        case 2 :
            tensWord = `двадцать `;
            answerNumberWord = answerNumberWord-20;
            break;
        case 3 :
            tensWord = `тридцать `;
            answerNumberWord = answerNumberWord-30;
            break;
        case 4 :
            tensWord = `сорок `;
            answerNumberWord = answerNumberWord-40;
            break;
        case 5 :
            tensWord = `пятьдесят `;
            answerNumberWord = answerNumberWord-50;
            break;
        case 6 :
            tensWord = `шестьдесят `;
            answerNumberWord = answerNumberWord-60;
            break;
        case 7 :
            tensWord = `семьдесят `;
            answerNumberWord = answerNumberWord-70;
            break;
        case 8 :
            tensWord = `восемьдесят `;
            answerNumberWord = answerNumberWord-80;
            break;
        case 9 :
            tensWord = `девяносто `;
            answerNumberWord = answerNumberWord-90;
            break;
        default:
            tensWord = ``;
            }
            switch (Math.trunc(answerNumberWord)) {
        case 1 :
            onesWord = `один`;
            break;
        case 2 :
            onesWord = `два`;
            break;
        case 3 :
            onesWord = `три`;
            break;
        case 4 :
            onesWord = `четыре`;
            break;
        case 5 :
            onesWord = `пять`;
            break;
        case 6 :
            onesWord = `шесть`;
            break;
        case 7 :
            onesWord = `семь`;
            break;
        case 8 :
            onesWord = `восемь`;
            break;
        case 9 :
            onesWord = `девять`;
            break;
        case 10 :
            onesWord = `десять`;
            break;
        case 11 :
            onesWord = `одинадцать`;
            break;
        case 12 :
            onesWord = `двенадцать`;
            break;
        case 13 :
            onesWord = `тринадцать`;
            break;
        case 14 :
            onesWord = `четырнадцать`;
            break;
        case 15 :
            onesWord = `пятнадцать`;
            break;
        case 16 :
            onesWord = `шестнадцать`;
            break;
        case 17 :
            onesWord = `семнадцать`;
            break;
        case 18 :
            onesWord = `восемнадцать`;
            break;
        case 19 :
            onesWord = `девятнадцать`;
        default:
            onesWord = ``;
            }
        answerNumberWord = signWord + hundredsWord + tensWord + onesWord;
        if (answerNumberWord == ``) {
            answerNumberWord = `0`;
        }
        if (answerNumberWord.length > 20) {
            answerNumberWord = answerNumber;
        }
            
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            phraseRandom = Math.round( Math.random()*3);
            switch (phraseRandom) {
                case 1 :
                    answerPhrase = `Вы загадали ${answerNumberWord }?\n\u{1F917}`;
                    break;
                case 2 :
                    answerPhrase = `Может быть ${answerNumberWord }?\n\u{1F9D0}`;
                    break;
                default:
                    answerPhrase = `Не ${answerNumberWord }?\n\u{1F914}`;
            }
            answerField.innerText = answerPhrase;
        }
    }
})

// Для кнопки меньше
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            
    //Функция перевода чисел в словестную форму
            if (answerNumber < 0) {
            signWord = `минус `;
            } else {
            signWord = ``;
            }
            answerNumberWord = Math.abs(answerNumber);
            switch (Math.trunc(answerNumberWord/100)) {
            case 1 :
                hundredsWord = `сто `;
                answerNumberWord = answerNumberWord-100;
                break;
            case 2 :
                hundredsWord = `двести `;
                answerNumberWord = answerNumberWord-200;
                break;
            case 3 :
                hundredsWord = `тристо `;
                answerNumberWord = answerNumberWord-300;
                break;
            case 4 :
                hundredsWord = `четыресто `;
                answerNumberWord = answerNumberWord-400;
                break;
            case 5 :
                hundredsWord = `пятьсот `;
                answerNumberWord = answerNumberWord-500;
                break;
            case 6 :
                hundredsWord = `шестьсот `;
                answerNumberWord = answerNumberWord-600;
               break;
            case 7 :
                hundredsWord = `семьсот `;
                answerNumberWord = answerNumberWord-700;
                break;
            case 8 :
                hundredsWord = `восемьсот `;
                answerNumberWord = answerNumberWord-800;
                break;
            case 9 :
                hundredsWord = `девятьсот `;
                answerNumberWord = answerNumberWord-900;
                break;
            default:
                hundredsWord = ``;
            }
            switch (Math.trunc(answerNumberWord/10)) {
            case 2 :
                tensWord = `двадцать `;
                answerNumberWord = answerNumberWord-20;
                break;
            case 3 :
                tensWord = `тридцать `;
                answerNumberWord = answerNumberWord-30;
                break;
            case 4 :
                tensWord = `сорок `;
                answerNumberWord = answerNumberWord-40;
                break;
            case 5 :
                tensWord = `пятьдесят `;
                answerNumberWord = answerNumberWord-50;
                break;
            case 6 :
                tensWord = `шестьдесят `;
                answerNumberWord = answerNumberWord-60;
                break;
            case 7 :
                tensWord = `семьдесят `;
                answerNumberWord = answerNumberWord-70;
                break;
            case 8 :
                tensWord = `восемьдесят `;
                answerNumberWord = answerNumberWord-80;
                break;
            case 9 :
               tensWord = `девяносто `;
                answerNumberWord = answerNumberWord-90;
                break;
            default:
                tensWord = ``;
            }
            switch (Math.trunc(answerNumberWord)) {
            case 1 :
                onesWord = `один`;
                break;
            case 2 :
                onesWord = `два`;
                break;
            case 3 :
               onesWord = `три`;
                break;
            case 4 :
                onesWord = `четыре`;
                break;
            case 5 :
                onesWord = `пять`;
                break;
            case 6 :
                onesWord = `шесть`;
                break;
            case 7 :
                onesWord = `семь`;
                break;
            case 8 :
                onesWord = `восемь`;
                break;
            case 9 :
                onesWord = `девять`;
                break;
            case 10 :
                onesWord = `десять`;
                break;
            case 11 :
                onesWord = `одинадцать`;
                break;
            case 12 :
                onesWord = `двенадцать`;
                break;
            case 13 :
                onesWord = `тринадцать`;
                break;
            case 14 :
                onesWord = `четырнадцать`;
                break;
            case 15 :
                onesWord = `пятнадцать`;
                break;
            case 16 :
                onesWord = `шестнадцать`;
                break;
            case 17 :
                onesWord = `семнадцать`;
                break;
            case 18 :
                onesWord = `восемнадцать`;
                break;
            case 19 :
                onesWord = `девятнадцать`;
            default:
                onesWord = ``;
            }
            answerNumberWord = signWord + hundredsWord + tensWord + onesWord;
            if (answerNumberWord == ``) {
                answerNumberWord = `0`;
            }
            if (answerNumberWord.length > 20) {
                answerNumberWord = answerNumber;
            }
            
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            phraseRandom = Math.round( Math.random()*3);
            switch (phraseRandom) {
                case 1 :
                    answerPhrase = `Вы загадали ${answerNumberWord }?\n\u{1F917}`;
                    break;
                case 2 :
                    answerPhrase = `Может быть ${answerNumberWord }?\n\u{1F9D0}`;
                    break;
                default:
                    answerPhrase = `Не ${answerNumberWord }?\n\u{1F914}`;
            }
            answerField.innerText = answerPhrase;
        }
    }
})

// Для кнопки верно
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        phraseRandom = Math.round( Math.random()*3);
        switch (phraseRandom) {
            case 1 :
                answerPhrase = `Я всегда угадываю\n\u{1F60E}`;
                break;
            case 2 :
                answerPhrase = `Проще пареной репы!\n\u{1F920}`;
                break;
            default:
                answerPhrase = `Не так уж и сложно \n\u{1F913}`;
        }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})