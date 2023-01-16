const htmlBody = document.querySelector('body');
const button = document.querySelector('.change-color');
const backgroundColorSpan = document.querySelector('.color');

button.addEventListener('click', onHtmlBody);

function onHtmlBody() {
  htmlBody.style.backgroundColor = backgroundColorSpan.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
