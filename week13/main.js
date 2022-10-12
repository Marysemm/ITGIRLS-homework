let userName = prompt(`Как тебя зовут?`, ``);
alert(`Привет, ${userName}!`)

const buttonPlus = document.getElementById('buttonPlus');
const buttonMinus = document.getElementById('buttonMinus');
const buttonMultiply = document.getElementById('buttonMultiply');
const buttonDivide = document.getElementById('buttonDivide');

function onButtonPlus() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let result = number1 + number2;

    document.getElementById('results').innerHTML = result;
}

function onButtonMinus() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let result = number1 - number2;

    document.getElementById('results').innerHTML = result;
}
function onButtonMultiply() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let result = number1 * number2;

    document.getElementById('results').innerHTML = result;
}
function onButtonDivide() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let result = number1 / number2;

    document.getElementById('results').innerHTML = result;
}