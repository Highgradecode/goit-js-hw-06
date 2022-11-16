function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const colorName = document.querySelector('.color');
const colorChangeButton = document.querySelector('.change-color');

colorChangeButton.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorName.textContent = bodyEl.style.backgroundColor;
})