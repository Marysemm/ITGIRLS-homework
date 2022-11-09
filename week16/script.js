const input = document.getElementById("text");
const result = document.getElementById("calc");
const newArray = document.getElementById("array");
const inputSum = document.getElementById("sum");
const clearAll = document.getElementById("clear");
let array = [];

input.addEventListener("change", () => {
    if (input.value !== "") {
        array.push(Number(input.value));
        input.value = "";
    }
});

result.addEventListener("click", () => {
    array.sort((a, b) => a - b);
    newArray.innerHTML += array.join(', ');
});

inputSum.addEventListener("click", () => {
    for (let i = 0; i < array.length; i++) {
        inputSum.value = Number(inputSum.value) + Number(array[i]);
    }
    document.getElementById("totalSum").innerHTML += inputSum.value;
});

clearAll.addEventListener("click", () => {
    array.length = 0;
    newArray.innerHTML = '';
    document.getElementById("totalSum").innerHTML = "";
})