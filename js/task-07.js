const inputControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
console.log("spanText", spanText)

inputControl.oninput = () => {
    spanText.style.fontSize = inputControl.value + 'px'; 
};