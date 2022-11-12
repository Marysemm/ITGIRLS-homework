const input = document.getElementById("text");
const newArray = document.getElementById("array");
const clearAll = document.getElementById("clear");
const total = document.getElementById("total");
let array = [];

input.addEventListener("change", () => {
    if (input.value !== "") {
        array.push(Number(input.value));
        input.value = "";
    }
});

total.addEventListener("click", () => {
    array.sort((a, b) => a - b);
    newArray.innerHTML += array.join(', ');
});

total.addEventListener("click", () => {
    for (let i = 0; i < array.length; i++) {
        total.value = Number(total.value) + Number(array[i]);
    }
    document.getElementById("totalSum").innerHTML += total.value;
});

clearAll.addEventListener("click", () => {
    array.length = 0;
    newArray.innerHTML = '';
    document.getElementById("totalSum").innerHTML = "";
})