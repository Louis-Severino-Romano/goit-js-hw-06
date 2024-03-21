let btn=document.querySelector('.change-color');
let color=document.querySelector('.color');

btn.addEventListener('click',function(){
let newColor=getRandomHexColor();
document.body.style.backgroundColor = newColor;
color.textContent = newColor;
console.log(newColor);
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


