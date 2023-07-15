const boxesList = document.getElementById("boxes");
const inputEl = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

inputEl.addEventListener("input", onInputValue);
createBtn.addEventListener("click", createBoxes);

let userInputValue = 0;
let markupForAddToBox = "";

function onInputValue() {
  userInputValue = parseInt(inputEl.value);
}

function createBoxes() {
  for (let i = 0; i < userInputValue; i++) {
    // const divEl = document.createElement("div");
    // boxesList.append(divEl);
    markupForAddToBox = markupForAddToBox + "<div class = item></div>";
  }
  // console.log(userInputValue);
  boxesList.innerHTML += markupForAddToBox;
  const divArr = document.querySelectorAll(".item");
  const divArrNew = [...divArr];
  const divArrFinal = divArrNew.reduce((sizeValue, element) => {
    sizeValue = sizeValue + 10;
    element.style.width = `${sizeValue}px`;
    element.style.heigth = `${sizeValue}px`;
    console.log(element.style.width);
    console.log(element.style.heigth);
  }, 20);
  console.dir(divArrNew);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const divSize = [];
