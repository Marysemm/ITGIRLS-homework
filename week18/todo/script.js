const notes = document.querySelector('.notes');
const enterNote = document.querySelector('#enterNote');
const addNote = document.querySelector('#addNote');
const clearAll = document.querySelector('#clearList');

let arrayList = [];

let createList = (text) => {
    let p = document.createElement('p');
    p.textContent = text;
    notes.append(p);
}

function addNewNote() {
    let newNote = enterNote.value;
    arrayList.push(newNote);
    createList(newNote);
    enterNote.value = '';
    localStorage.setItem('note', arrayList);
}

clearAll.addEventListener('click', function () {
    localStorage.clear();
});