import '../scss/main.scss';

/* place your code below */

console.log('HELLO 🚀')

const FORM_INPUT_LOCAL_STORAGE_KEY = "inputInStorage"

function onLoadButtonClick() {
    const valueToSetInInput = localStorage.getItem(FORM_INPUT_LOCAL_STORAGE_KEY,)
    textAreaInputElement.value = valueToSetInInput;
}

function onSaveButtonClick() {
    const valueToSave = textAreaInputElement.value;
    localStorage.setItem(FORM_INPUT_LOCAL_STORAGE_KEY, valueToSave)
}

const textAreaInputElement = document.querySelector(".form-editor__input-js");
const saveButtonInputElement = document.querySelector(".form-editor__load-button-js");
const loadButtonInputElement = document.querySelector(".form-editor__save-button-js");

saveButtonInputElement.addEventListener("click", onLoadButtonClick, false);
loadButtonInputElement.addEventListener("click", onSaveButtonClick, false);