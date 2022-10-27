const greetings = () => {
    const userName = prompt("Как тебя зовут?", "");
    alert(`Привет, ${userName}!`)
}

const buttonPlus = document.getElementById('buttonPlus');
const buttonMinus = document.getElementById('buttonMinus');
const buttonMultiply = document.getElementById('buttonMultiply');
const buttonDivide = document.getElementById('buttonDivide');

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

function clickOnButtonPlus() {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let result = number1 + number2;
    document.getElementById('results').value = result;
}

function clickOnButtonMinus() {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let result = number1 - number2;
    document.getElementById('results').value = result;
}

function clickOnButtonMultiply() {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let result = number1 * number2;
    document.getElementById('results').value = result;
}

function clickOnButtonDivide() {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let result = number1 / number2;
    document.getElementById('results').value = result;
}

function clearAll() {
    input1.value = '';
    input2.value = '';
    results.value = '';
}


function changeColor() {
    document.getElementById('calculator').style.backgroundColor = "gray";
}