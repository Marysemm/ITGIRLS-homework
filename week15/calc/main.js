const greetings = () => {
    const userName = prompt("Как тебя зовут?", "");
    alert(`Привет, ${userName}!`)
}

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

const buttonPlus = document.querySelector('buttonPlus');

function clickOnButtonPlus() {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let result = number1 + number2;
    document.getElementById('results').value = result;
}

const buttonMinus = document.querySelector('buttonMinus');

function clickOnButtonMinus() {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let result = number1 - number2;
    document.getElementById('results').value = result;
}

const buttonMultiply = document.querySelector('buttonMultiply');

function clickOnButtonMultiply() {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let result = number1 * number2;
    document.getElementById('results').value = result;
}

const buttonDivide = document.querySelector('buttonDivide');

function clickOnButtonDivide() {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let result = number1 / number2;
    if (number2 == 0) {
        document.getElementById('errorMessage').innerHTML += 'На ноль делить нельзя';
    }
    else (document.getElementById('results').value = result);
}

function clearAll() {
    input1.value = '';
    input2.value = '';
    results.value = '';
}


function changeColor() {
    document.getElementById('calculator').style.backgroundColor = "gray";
}