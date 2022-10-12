let userName = prompt(`Как тебя зовут?`, ``);
alert(`Привет, ${userName}!`)

const buttonPlus = document.getElementById('buttonPlus');
const buttonMinus = document.getElementById('buttonMinus');
const buttonMultiply = document.getElementById('buttonMultiply');
const buttonDivide = document.getElementById('buttonDivide');

function clickOnButtonPlus() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let result = number1 + number2;

    document.getElementById('results').innerHTML = result;
}

function clickOnButtonMinus() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let result = number1 - number2;

    document.getElementById('results').innerHTML = result;
}

function clickOnButtonMultiply() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let result = number1 * number2;

    document.getElementById('results').innerHTML = result;
}

function clickOnButtonDivide() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let result = number1 / number2;

    document.getElementById('results').innerHTML = result;
}