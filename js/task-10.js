const boxesList = document.getElementById("boxes");
const inputEl = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", onCreateClick);
destroyBtn.addEventListener("click", onDestroyClick);

function onCreateClick() {
  const inputValue = parseInt(inputEl.value);
  const valueArray = [];
  let boxWidth = 30;
  let boxHeigth = 30;
  for (let i = 0; i < inputValue; i += 1) {
    const boxesEl = document.createElement("div");
    boxesEl.style.width = `${boxWidth}px`;
    boxesEl.style.height = `${boxHeigth}px`;
    boxesEl.style.backgroundColor = getRandomHexColor();
    valueArray.push(boxesEl);
    boxWidth += 10;
    boxHeigth += 10;
    boxesList.innerHTML = "";
  }
  boxesList.append(...valueArray);
}

function onDestroyClick() {
  boxesList.innerHTML = "";
  inputEl.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
