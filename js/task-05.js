const refs = {
    input: document.querySelector('#name-input'),
    greeting: document.querySelector('#name-output'),
};

const inputForm = refs.input.addEventListener('input', onFormInput);

function onFormInput(event) {
    const changeFormInput = event.currentTarget.value;
    if (changeFormInput !== '') {
        refs.greeting.textContent = changeFormInput;
    } else {
        refs.greeting.textContent = 'Anonymous';
    };
};