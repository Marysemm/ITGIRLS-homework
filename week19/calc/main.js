const buttonPlus = document.querySelector('buttonPlus');
const buttonMinus = document.querySelector('buttonMinus');
const buttonMultiply = document.querySelector('buttonMultiply');
const buttonDivide = document.querySelector('buttonDivide');
const clearBtn = document.querySelector('clear');

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

class Calculator {
    static sumNumbers() {
        let number1 = Number(input1.value);
        let number2 = Number(input2.value);
        let result = number1 + number2;
        document.getElementById('results').value = result;
    }

    static minusNumbers() {
        let number1 = Number(input1.value);
        let number2 = Number(input2.value);
        let result = number1 - number2;
        document.getElementById('results').value = result;
    }

    static multilyNumbers() {
        let number1 = Number(input1.value);
        let number2 = Number(input2.value);
        let result = number1 * number2;
        document.getElementById('results').value = result;
    }

    static divideNumbers() {
        let number1 = Number(input1.value);
        let number2 = Number(input2.value);
        let result;
        document.getElementById('errorMessage').innerHTML = "";
        if (number2 == 0) {
            document.getElementById('errorMessage').innerHTML += 'На ноль делить нельзя';
        }
        else {
            result = number1 / number2;
            document.getElementById('results').value = result;
        }
    }

    static clearAll() {
        input1.value = '';
        input2.value = '';
        results.value = '';
    }
}

function changeColor() {
    document.getElementById('calculator').style.backgroundColor = "gray";
}

buttonPlus.addEventListener('click', Calculator.sumNumbers);
buttonMinus.addEventListener('click', Calculator.minusNumbers);
buttonMultiply.addEventListener('click', Calculator.multilyNumbers);
buttonDivide.addEventListener('click', Calculator.divideNumbers);
clearBtn.addEventListener('click', Calculator.clearAll);