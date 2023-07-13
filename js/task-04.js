let counterValue = 0;

const buttonPlus = document.querySelector('button[data-action="increment"]');
console.log(buttonPlus);
const buttonMinus = document.querySelector('button[data-action="decrement"]');
console.log(buttonMinus);
const calcResult = document.getElementById("value");
console.log(calcResult);

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
