let counterValue = 0;


const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueEL = document.querySelector('#value');

incrementButton.addEventListener("click", () => {
    counterValue += 1;
    valueEL.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
    counterValue -= 1;
    valueEL.textContent = counterValue;
});