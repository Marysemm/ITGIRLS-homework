const form = document.querySelector(".form");
const auto = document.querySelector(".auto");
const inputOptions = document.querySelectorAll(".inputOptions");
const extraItems = document.querySelectorAll(".extraItems");
const result = document.querySelector(".result");

form.onsubmit = (evt) => {
    evt.preventDefault();
    let sum;
    const car = auto.value;
    sum = +car;
    for (let i = 0; i < inputOptions.length; i++) {
        if (inputOptions[i].checked) {
            sum = sum + Number(inputOptions[i].value)
        }
    };

    for (let i = 0; i < extraItems.length; i++) {
        if (extraItems[i].checked) {
            sum = sum + Number(extraItems[i].value)
        }
    };

    result.innerHTML = sum;
}