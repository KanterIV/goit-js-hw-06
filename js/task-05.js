const refs = {
  inputEl: document.getElementById("name-input"),
  nameEl: document.getElementById("name-output"),
};

refs.inputEl.addEventListener("input", onNameElChangeInput);

function onNameElChangeInput(event) {
  if (!event.currentTarget.value) {
    refs.nameEl.textContent = "Anonymous";
  } else {
    refs.nameEl.textContent = event.currentTarget.value;
  }
}
