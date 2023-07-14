const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", onInputValidationBlur);

function onInputValidationBlur(e) {
  if (inputEl.value.length !== parseInt(inputEl.dataset.length)) {
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.add("valid");
  }
}
