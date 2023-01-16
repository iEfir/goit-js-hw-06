const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

const createEventDecrement = btnDecrement.addEventListener('click', () => {
    valueEl.textContent = counterValue -= 1;
});

const createEventIncrement = btnIncrement.addEventListener('click', () => {
    valueEl.textContent = counterValue += 1;
});
