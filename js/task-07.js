const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl.addEventListener("input", onTextSizeChangeInput);

function onTextSizeChangeInput(event) {
  const sizeValue = event.currentTarget.value;
  textEl.style.fontSize = `${sizeValue}px`;
}
