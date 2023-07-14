const buttonEl = document.querySelector(".change-color");
const bodyBgColorText = document.querySelector(".color");
buttonEl.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  bodyBgColorText.textContent = document.body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
