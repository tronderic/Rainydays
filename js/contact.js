const form = document.querySelector("#form");
const yourName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const successMessage = document.querySelector(".successMessage");

function validateForm(event) {
    event.preventDefault();

    let validationPassed = true;

    if (yourName.value.trim().length > 0) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
        validationPassed = false;
    }

    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        validationPassed = false;
    }

    if (message.value.trim().length > 0) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        validationPassed = false;
    }

    if (validationPassed) {
        successMessage.innerHTML = "<div id='successMessage'>Your request have been submitted</div>";
    } else {
        successMessage.innerHTML = "";
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

form.addEventListener("submit", validateForm);
