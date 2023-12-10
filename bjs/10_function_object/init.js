let initPerson
window.onload = function () {
    initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDayOutput').innerText = initPerson.birthDay;
    document.getElementById('employmentOutput').innerText = initPerson.employment;
}
// Для кнопки заново
document.getElementById('btnGenerate').addEventListener('click', function() {
    initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDayOutput').innerText = initPerson.birthDay;
    document.getElementById('employmentOutput').innerText = initPerson.employment;
});

// Для кнопки очистить
document.getElementById('btnClean').addEventListener('click', function() {
    initPerson = undefined;
    document.getElementById('surnameOutput').innerText = ' ';
    document.getElementById('firstNameOutput').innerText = ' ';
    document.getElementById('patronymicOutput').innerText = ' ';
    document.getElementById('genderOutput').innerText = ' ';
    document.getElementById('birthDayOutput').innerText = ' ';
    document.getElementById('employmentOutput').innerText = ' ';
});