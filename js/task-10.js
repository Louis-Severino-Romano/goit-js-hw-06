function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const Myboxes = document.getElementById('boxes');
  Myboxes.innerHTML = ''; 
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    Myboxes.appendChild(box);
    size += 10; 
  }
}
let myBtn=document.querySelector('button[data-create]');
myBtn.addEventListener('click',function(){
  
  const amount = document.querySelector('input[type="number"]').value;
  if (amount > 0) {
    createBoxes(amount);
  } else {
    alert('Please enter a number greater than zero.');
  }

});
function destroyBoxes() {
  const myBoxes = document.getElementById('boxes');
  myBoxes.innerHTML = ''; 
}


document.querySelector('button[data-destroy]').addEventListener('click', function() {
  destroyBoxes();
});