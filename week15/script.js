function changeColor() {
    let selectedColor = document.getElementById("selectTheme").value;
    document.body.style.backgroundColor = selectedColor;
}

function checkInputs() {
    let userName = document.querySelector('#userName');
    let email = document.querySelector('#email');
    let number = document.querySelector('#number');
    let password = document.querySelector('#password1');
    let passwordRepeat = document.querySelector('#password2');
    let checkbox = document.querySelector('#agreements');

    document.getElementById('errorMessage').innerHTML = "";

    if (userName.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле имя не заполнено<br>";
    }

    if (email.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле почта не заполнено<br>";
    }

    if (email.value.indexOf('@', 0) == -1) {
        document.getElementById('errorMessage').innerHTML += "Поле почта заполнено не верно<br>";
    }

    if (number.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле номер телефона не заполнено<br>";
    }

    if (number.value.length < 11) {
        document.getElementById('errorMessage').innerHTML += "Номер телефона слишком короткий<br>";
    }

    if (password.value.length <= 6) {
        document.getElementById('errorMessage').innerHTML += "Ваш пароль слишком короткий<br>";
    }

    if (password.value !== passwordRepeat.value) {
        document.getElementById('errorMessage').innerHTML += "Ваши пароли не совпадают<br>";
    }

    if (checkbox.сhecked == false) {
        document.getElementById('errorMessage').innerHTML += "Подтвердите согласие на обработку данных<br>";
    }
}

document.querySelector("#logIn").addEventListener('click', checkInputs);