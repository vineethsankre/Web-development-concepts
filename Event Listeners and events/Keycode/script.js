let userInputEl = document.getElementById("userInput");
let keyCodeListEl = document.getElementById("keyCodeList");

function createAndAppendCode(code) {
    let codeEl = document.createElement("li");
    codeEl.textContent = code;
    keyCodeListEl.appendChild(codeEl);
}

function onKeyDown(event) {
    createAndAppendCode(event.keyCode);
}

userInputEl.addEventListener("keydown", onKeyDown);