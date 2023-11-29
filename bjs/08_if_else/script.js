let phraseRandom;
let answerPhrase;
let minValue;
let maxValue;
let minValueEnter;
let maxValueEnter;
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
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

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
answerNumber  = Math.floor((minValue + maxValue) / 2);
orderNumber = 1;
gameRun = true;
    
orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;
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
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            phraseRandom = Math.round( Math.random()*3);
            switch (phraseRandom) {
                case 1 :
                    answerPhrase = `Вы загадали ${answerNumber }?\n\u{1F917}`;
                    break;
                case 2 :
                    answerPhrase = `Может быть ${answerNumber }?\n\u{1F9D0}`;
                    break;
                default:
                    answerPhrase = `Не ${answerNumber }?\n\u{1F914}`;
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
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            phraseRandom = Math.round( Math.random()*3);
            switch (phraseRandom) {
                case 1 :
                    answerPhrase = `Вы загадали ${answerNumber }?\n\u{1F917}`;
                    break;
                case 2 :
                    answerPhrase = `Может быть ${answerNumber }?\n\u{1F9D0}`;
                    break;
                default:
                    answerPhrase = `Не ${answerNumber }?\n\u{1F914}`;
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