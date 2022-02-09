// fetching query string id

const newQueryString = document.location.search;
const newParams = new URLSearchParams(newQueryString);
const id = newParams.get("id");
const url = `https://rainydays.aadnoywebdev.one/wp-json/wc/store/products/${id}`;

// adding product details

async function product(url) {
    const data = await fetch(url);
    const product = await data.json();

    const img = document.querySelector(".item");
    const item = document.querySelector(".item5");
    const price = document.querySelector(".item8");

    img.src = product.images[0].src;
    item.innerHTML = product.name;
    price.innerHTML = product.price_html;
}

product(url);

// Returning Customer

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

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
        redirect();
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
const newPasswordError = document.querySelector("#newPasswordError");

function validateNewForm(event) {
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

    if (newPassword.value.trim().length > 0) {
        newPasswordError.style.display = "none";
    } else {
        newPasswordError.style.display = "block";
        validationPassed = false;
    }

    if (validationPassed) {
        redirect();
    }
}

function validateNewEmail(emailNew) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(emailNew);
    return patternMatches;
}

function redirect() {
    location.replace("../checkout-success.html");
}

newForm.addEventListener("submit", validateNewForm);

// Cart

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const qty = params.get("quantity");

const size = params.get("size");

const total = document.querySelector(".total");

const updatedQty = document.querySelector("#updatedQuantity");

const updatedSize = document.querySelector("#updatedSize");

updatedSize.value = size;

updatedQty.value = qty;

const totalCost = 52 * updatedQty.value + 7;

total.innerHTML = `Total $ ${totalCost}`;

updatedQty.onchange = function () {
    const totalCost = 52 * updatedQty.value + 7;

    console.log(totalCost);
    total.innerHTML = `Total $ ${totalCost}`;
};
