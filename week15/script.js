function checkCheckbox() {
    let checkbox = document.querySelector('#agreements');
    document.getElementById('errorMessage').innerHTML = "";

    if (checkbox.сhecked) {
        document.getElementById('errorMessage').innerHTML += "Вы дали согласие на обработку данных<br>";
    }
    else {
        document.getElementById('errorMessage').innerHTML += "Вы дали согласие на обработку данных<br>";
    }
}

function checkInputs() {
    let email = document.querySelector('#email');
    let number = document.querySelector('#number');
    let password = document.querySelector('#password1');
    let passwordRepeat = document.querySelector('#password2');

    document.getElementById('errorMessage').innerHTML = "";

    if (email.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле почта не заполнено<br>";
    }

    if (email.value.indexOf('@', 0) == -1) {
        document.getElementById('errorMessage').innerHTML += "Поле почта заполнено не верно<br>";
    }


    if (number.value == '') {
        document.getElementById('errorMessage').innerHTML += "Поле номер не заполнено<br>";
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

    else {
        alert("Вы успешно зарегистрировались!")
    }
}
