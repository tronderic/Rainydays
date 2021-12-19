// Returning Customer

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const successMessage = document.querySelector(".successMessage");

function validateForm(event) {
    event.preventDefault();

    let validationPassed = true;

    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        validationPassed = false;
    }

    if (password.value.trim().length > 0) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
        validationPassed = false;
    }

    if (validationPassed) {
        successMessage.innerHTML = "<div id='successMessage'>You have been successfully logged in</div>";
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

// New Customer

const newForm = document.querySelector("#newForm");
const firstName = document.querySelector("#first-name");
const firstNameError = document.querySelector("#first-nameError");
const lastName = document.querySelector("#last-name");
const lastNameError = document.querySelector("#last-nameError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");
const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zipError");
const emailNew = document.querySelector("#emailNew");
const emailNewError = document.querySelector("#emailNewError");
const newPassword = document.querySelector("#newPassword");
const NewPasswordError = document.querySelector("#newPasswordError");
const newSuccessMessage = document.querySelector(".newSuccessMessage");

function validateForm(event) {
    event.preventDefault();

    let validationPassed = true;

    if (firstName.value.trim().length > 0) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
        validationPassed = false;
    }

    if (lastName.value.trim().length > 0) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
        validationPassed = false;
    }

    if (address.value.trim().length > 0) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
        validationPassed = false;
    }

    if (city.value.trim().length > 0) {
        cityError.style.display = "none";
    } else {
        cityError.style.display = "block";
        validationPassed = false;
    }

    if (zip.value.trim().length > 0) {
        zipError.style.display = "none";
    } else {
        zipError.style.display = "block";
        validationPassed = false;
    }

    if (validateNewEmail(emailNew.value)) {
        emailNewError.style.display = "none";
    } else {
        emailNewError.style.display = "block";
        validationPassed = false;
    }

    if (password.value.trim().length > 0) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
        validationPassed = false;
    }

    if (validationPassed) {
        successMessage.innerHTML = "<div id='successMessage'>Your request has been submitted</div>";
    } else {
        successMessage.innerHTML = "";
    }
}

function validateNewEmail(emailNew) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(emailNew);
    return patternMatches;
}

newForm.addEventListener("submit", validateForm);