const inputValue = document.querySelector('#name-input');
const outputValue = document.querySelector('#name-output');

inputValue.addEventListener('input', event => {
  outputValue.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value === '') {
    outputValue.textContent = 'Anonymous';
  }
});
