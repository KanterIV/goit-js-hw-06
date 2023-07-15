const refs = {
  inputEl: document.getElementById("name-input"),
  nameEl: document.getElementById("name-output"),
};

refs.inputEl.addEventListener("input", onNameElChangeInput);

function onNameElChangeInput(event) {
  // !Варіант №1
  // if (!event.currentTarget.value) {
  //   refs.nameEl.textContent = "Anonymous";
  // } else {
  //   refs.nameEl.textContent = event.currentTarget.value;
  // }

  // !Варіант №2
  refs.nameEl.textContent = event.currentTarget.value || "Anonymous";
}
