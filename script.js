"use strict";

const inputFirstName = document.getElementById("inputFirstName");
const inputLastName = document.getElementById("inputLastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const passwordError = document.getElementById("passwordError");
const emailError = document.getElementById("emailError");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorIcon = document.getElementById("errorIcon");
const errorIcon1 = document.getElementById("errorIcon1");
const errorIcon2 = document.getElementById("errorIcon2");
const errorIcon3 = document.getElementById("errorIcon3");
const form = document.getElementById("form");
const submitButton = document.getElementById("submitButton");
const inputBorder = document.querySelectorAll("input-border");

function validateForm() {
  // Reset error messages
  firstNameError.classList.add("hidden");
  lastNameError.classList.add("hidden");
  emailError.classList.add("hidden");
  passwordError.classList.add("hidden");
  errorIcon.classList.add("hidden");
  errorIcon1.classList.add("hidden");
  errorIcon2.classList.add("hidden");
  errorIcon3.classList.add("hidden");

  const inputValue = {
    firstName: inputFirstName.value.trim(),
    lastName: inputLastName.value.trim(),
    email: email.value.trim(),
    password: password.value.trim(),
  };

  if (inputValue.firstName === "") {
    firstNameError.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
    return;
  }

  if (inputValue.lastName === "") {
    lastNameError.classList.remove("hidden");
    errorIcon1.classList.remove("hidden");
    return;
  }

  if (!emailPattern.test(inputValue.email)) {
    emailError.classList.remove("hidden");
    errorIcon2.classList.remove("hidden");
    return;
  }

  if (inputValue.password === "") {
    passwordError.classList.remove("hidden");
    errorIcon3.classList.remove("hidden");
    return;
  }

  location.reload(); // Refreshes the page for demonstration
  alert("Thank you for subscribing");
}

// Event listener for Enter key press
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && submitButton) {
    //   console.log("enter key was pressed");
    validateForm();
  }
});

// Event Listeners for focus state
form.addEventListener(
  "focus",
  () => {
    firstNameError.classList.add("hidden");
    errorIcon.classList.add("hidden");
  },
  true
);

form.addEventListener(
  "focus",
  () => {
    lastNameError.classList.add("hidden");
    errorIcon1.classList.add("hidden");
  },
  true
);

form.addEventListener(
  "focus",
  () => {
    emailError.classList.add("hidden");
    errorIcon2.classList.add("hidden");
  },
  true
);

form.addEventListener(
  "focus",
  () => {
    passwordError.classList.add("hidden");
    errorIcon3.classList.add("hidden");
  },
  true
);

form.addEventListener(
  "blur",
  (event) => {
    event.target.style.background = "";
  },
  true
);

// Changes color of input fields if submit button is clicked without filling the form
submitButton.addEventListener("click", function () {
  if (inputFirstName.value.trim() === "") {
    inputFirstName.classList.remove("border-solid");
    document.getElementById("inputFirstName").style.borderColor =
      "hsl(0, 100%, 74%)";
  } else {
    document.getElementById("inputFirstName").style.borderColor =
      "hsl(246, 25%, 77%)";
  }

  if (inputLastName.value.trim() === "") {
    inputLastName.classList.remove("border-solid");
    document.getElementById("inputLastName").style.borderColor =
      "hsl(0, 100%, 74%)";
  } else {
    document.getElementById("inputLastName").style.borderColor =
      "hsl(246, 25%, 77%)";
  }

  if (email.value.trim() === "") {
    email.classList.remove("border-solid");
    document.getElementById("email").style.borderColor = "hsl(0, 100%, 74%)";
  } else {
    document.getElementById("email").style.borderColor = "hsl(246, 25%, 77%)";
  }

  if (password.value.trim() === "") {
    password.classList.remove("border-solid");
    document.getElementById("password").style.borderColor = "hsl(0, 100%, 74%)";
  } else {
    document.getElementById("password").style.borderColor =
      "hsl(246, 25%, 77%)";
  }
});
