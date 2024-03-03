"use strict";

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputContainers = document.querySelectorAll(".input-container");
  let hasErrors = false;

  inputContainers.forEach((inputContainer) => {
    const input = inputContainer.querySelector("input");
    const errorIcon = inputContainer.querySelector(".error-icon");
    const email = document.getElementById("email").value;
    const errorMessage = inputContainer.querySelector(".error-message");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!input.value) {
      let fieldName = input.name;
      let spacedFieldName = fieldName.replace(/([a-z])([A-Z])/g, "$1 $2");
      let spacedWord = `${spacedFieldName}`;
      input.name = spacedWord;

      errorMessage.textContent = `${
        input.name[0].toUpperCase() + input.name.slice(1)
      } cannot be empty`;
      errorIcon.style.display = "block";
      input.style.borderColor = "hsl(0, 100%, 74%)";
      inputContainer.style.marginBottom = "1.5rem";
      hasErrors = true;
    } else if (input.name === "email" && !emailRegex.test(email)) {
      errorMessage.textContent = "Looks like this is not an email";
      errorIcon.style.display = "block";
      hasErrors = true;
    } else {
      errorMessage.textContent = "";
      errorIcon.style.display = "none";
      input.style.borderColor = "#dedede";
      inputContainer.style.marginBottom = "1rem";
    }
  });

  if (!hasErrors) {
    location.reload();
    alert("Thank you for subscribing");
  }
});

const inputFields = form.querySelectorAll("input");
inputFields.forEach((field) => {
  field.addEventListener("focus", function () {
    this.style.borderColor = "hsl(248, 32%, 49%)";
    field.parentElement.querySelector(".error-icon").style.display = "none";
    field.parentElement.querySelector(".error-message").textContent = "";
  });
});
