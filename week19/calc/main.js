const buttonPlus = document.querySelector('#buttonPlus');
const buttonMinus = document.querySelector('#buttonMinus');
const buttonMultiply = document.querySelector('#buttonMultiply');
const buttonDivide = document.querySelector('#buttonDivide');
const errorMessage = document.getElementById('errorMessage');
let result = document.getElementById('results');

class Calculator {
    static getNumbers() {
        let number1 = document.getElementById('number1').value;
        let number2 = document.getElementById('number2').value;
        return [number1, number2];
    }

    static sumNumbers() {
        let [number1, number2] = Calculator.getNumbers();
        if (number1 !== " " && number2 !== " ") {
            return number1 + number2;
        }
    }

    static minusNumbers() {
        let [number1, number2] = Calculator.getNumbers();
        if (number1 !== " " && number2 !== " ") {
            return number1 - number2;
        }
    }

    static multiplyNumbers() {
        let [number1, number2] = Calculator.getNumbers();
        if (number1 !== " " && number2 !== " ") {
            return number1 * number2;
        }
    }

    static divideNumbers() {
        let [number1, number2] = Calculator.getNumbers();
        if (number2 == 0) {
            errorMessage.innerHTML = "На ноль делить нельзя!";
        }
        else if (number1 !== " " && number2 !== " ") {
            errorMessage.innerHTML = "";
            return number1 / number2;
        }
    }
}

buttonPlus.addEventListener("click", () => {
    if (Calculator.sumNumbers() !== undefined) {
        result.value = Calculator.sumNumbers();
    }
});

buttonMinus.addEventListener("click", () => {
    if (Calculator.minusNumbers() !== undefined) {
        result.value = Calculator.minusNumbers();
    }
});

buttonMultiply.addEventListener("click", () => {
    if (Calculator.multiplyNumbers() !== undefined) {
        result.value = Calculator.multiplyNumbers();
    }
});

buttonDivide.addEventListener("click", () => {
    if (Calculator.divideNumbers() !== undefined) {
        result.value = Calculator.divideNumbers();
    }
});

function clearAll() {
    document.getElementById('number1').value = "";
    document.getElementById('number2').value = "";
    result.value = "";
}

function changeColor() {
    document.getElementById('calculator').style.backgroundColor = "gray";
}