function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('#controls input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
btnCreate.addEventListener('click', () => {
  if (input.value >= 1 && input.value <= 100) {
    const value = input.value;
    input.value = '';
    createBoxes(value);
  } else {
    alert('Число повинно бути від 1 до 100');
  }
});

function createBoxes(amount) {
  const markap = [];
  console.log(amount);
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    markap.push(div);
  }
  console.log(markap);
  boxes.append(...markap);
}

btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = '';
}
