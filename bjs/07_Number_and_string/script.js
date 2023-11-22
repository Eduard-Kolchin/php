let lastOperand = 0;
let operation = null;
let result = null;

const inputWindow = document.getElementById('inputWindow');

// button clr
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

//button operation
document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = `sum`;
    inputWindow.value = '';
})
document.getElementById('btn_dif').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = `dif`;
    inputWindow.value = '';
})
document.getElementById('btn_multiply').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = `multiply`;
    inputWindow.value = '';
})
document.getElementById('btn_divvy').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = `divvy`;
    inputWindow.value = '';
})
document.getElementById('btn_sqrt').addEventListener('click', function () {
    inputWindow.value = Math.sqrt(inputWindow.value);
})

// button result
document.getElementById('btn_result').addEventListener('click', function () {
    if (operation === `sum`){
        result = lastOperand + parseInt(inputWindow.value);
        inputWindow.value = result;
    };
    if (operation === `dif`){
        result = lastOperand - parseInt(inputWindow.value);
        inputWindow.value = result;
    };
    if (operation === `multiply`){
        result = lastOperand * parseInt(inputWindow.value);
        inputWindow.value = result;
    };    
    if (operation === `divvy`){
        result = lastOperand / parseInt(inputWindow.value);
        inputWindow.value = result;
    };
})

//button data input
document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += `0`;
})
document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += `1`;
})
document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += `2`;
})
document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += `3`;
})
document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += `4`;
})
document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += `5`;
})
document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += `6`;
})
document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += `7`;
})
document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += `8`;
})
document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += `9`;
})
document.getElementById('btn_point').addEventListener('click', function () {
    inputWindow.value += `.`;
})
document.getElementById('btn_sign').addEventListener('click', function () {
    inputWindow.value = -inputWindow.value;
})