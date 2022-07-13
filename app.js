const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailAddressInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const inputs = document.querySelectorAll("input");

const form = document.querySelector(".form");

const inputHandler = (event) => {
  if (event.target.value.trim() === "") {
    showError(event.target);
  } else {
    clearError(event.target);
  }
};

inputs.forEach((input) => {
  input.addEventListener("blur", inputHandler);
  input.addEventListener("input", inputHandler);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateInput();
  const errorInput = document.querySelector(".error input:first-child");
  if (errorInput) {
    document.querySelector(".error input:first-child").focus();
    return;
  }
  inputs.forEach((input) => (input.value = ""));
});

function showError(input) {
  const parent = input.parentElement;
  parent.className = "form-control error";
}

function clearError(input) {
  const parent = input.parentElement;
  parent.className = "form-control";
}

function isValid(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function validateInput() {
  const firstNameValue = firstNameInput.value;
  const lastNameValue = lastNameInput.value;
  const emailValue = emailAddressInput.value;
  const passwordValue = passwordInput.value;

  if (firstNameValue.trim() === "") {
    showError(firstNameInput);
  } else {
    clearError(firstNameInput);
  }

  if (lastNameValue.trim() === "") {
    showError(lastNameInput);
  } else {
    clearError(lastNameInput);
  }

  if (emailValue.trim() === "" || !isValid(emailValue)) {
    showError(emailAddressInput);
  } else {
    clearError(emailAddressInput);
  }

  if (passwordValue === "") {
    showError(passwordInput);
  } else {
    clearError(passwordInput);
  }
}
