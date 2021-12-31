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
    successMessage.innerHTML =
      "<div id='successMessage'>You have been successfully logged in</div>";
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
