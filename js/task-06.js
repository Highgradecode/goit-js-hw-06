const textInput = document.querySelector('#validation-input');
const exactLength = Number(textInput.dataset.length);

textInput.addEventListener("blur", CheckInputLength);

function CheckInputLength() {
    const inputLengt = textInput.value.length;

    inputLengt === exactLength ? addValidClass() : addInvalidClass();
}

function addValidClass() {
    textInput.classList.contains("invalid") ?
    textInput.classList.replace("invalid", "valid") :
    textInput.classList.add("valid");
}

function addInvalidClass() {
    textInput.classList.contains("valid") ?
    textInput.classList.replace("valid", "invalid") :
    textInput.classList.add("invalid");
}