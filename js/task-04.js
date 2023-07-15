let counterValue = 0;

const buttonPlus = document.querySelector('button[data-action="increment"]');
const buttonMinus = document.querySelector('button[data-action="decrement"]');
const calcResult = document.getElementById("value");

buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMinus.addEventListener("click", onButtonMinusClick);

function onButtonPlusClick() {
  counterValue += 1;
  calcResult.textContent = counterValue;
}

function onButtonMinusClick() {
  counterValue -= 1;
  calcResult.textContent = counterValue;
}
