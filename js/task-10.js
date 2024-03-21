function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Clear existing boxes
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    boxesContainer.appendChild(box);
    size += 10; // Increase size for next box
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Clear all boxes
}

document.getElementById('createButton').addEventListener('click', function() {
  const amount = document.getElementById('amountInput').value;
  if (amount > 0) {
    createBoxes(amount);
  } else {
    alert('Please enter a valid number greater than zero.');
  }
});

document.getElementById('destroyButton').addEventListener('click', function() {
  destroyBoxes();
});