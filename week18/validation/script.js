/*let errors = [];
function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('Поле ' + input.name + ' не заполнено');
    }
    if (validity.patternMismatch) {
        errors.push('Неверный формат заполнения');
    }
    if (validity.rangeUnderflow) {
        let min = input.getAttributeValue('min');
        errors.push(`Максимальное значение не может быть больше чем' + ${min}`);
    }
    console.log(validity);
};

function checkAll() {
    let inputs = document.querySelectorAll('input');
    for (let input of inputs) {
        checkValidity(input);
    }
    document.getElementById("errorMessage").innerHTML = errors.join(', <br>');
};

document.querySelector("#logIn").addEventListener('click', checkAll);
*/

let userName = document.querySelector('#userName');
let email = document.querySelector('#email');
let number = document.querySelector('#number');
let password = document.querySelector('#password1');
let passwordRepeat = document.querySelector('#password2');
let checkbox = document.querySelector('#agreements');
let loginFormat = /[A-Za-z]/gm;

function changeColor() {
    let selectedColor = document.getElementById("selectTheme").value;
    document.body.style.backgroundColor = selectedColor;
}

function checkInputs() {
    document.getElementById('errorMessage').innerHTML = "";

    if (userName.value.match(loginFormat)) {
        document.getElementById('errorMessage').innerHTML += "Поле имя заполнено неверно<br>";
    }

    else if (userName.value === 0) {
        document.getElementById('errorMessage').innerHTML += "Поле имя не заполнено<br>";
    }

    else if (email.value === '') {
        document.getElementById('errorMessage').innerHTML += "Поле почта не заполнено<br>";
    }

    else if (email.value.indexOf('@', 0) == -1) {
        document.getElementById('errorMessage').innerHTML += "Поле почта заполнено не верно<br>";
    }

    else if (number.value === '') {
        document.getElementById('errorMessage').innerHTML += "Поле номер телефона не заполнено<br>";
    }

    else if (number.value.length < 11) {
        document.getElementById('errorMessage').innerHTML += "Номер телефона слишком короткий<br>";
    }

    else if (password.value.length <= 6) {
        document.getElementById('errorMessage').innerHTML += "Ваш пароль слишком короткий<br>";
    }

    else if (password.value !== passwordRepeat.value) {
        document.getElementById('errorMessage').innerHTML += "Ваши пароли не совпадают<br>";
    }

    else (alert(`Добро пожаловать, ${userName.value}!`));
};

document.querySelector("#logIn").addEventListener('click', checkInputs); 