const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const uList = document.getElementById('ingredients');
ingredients.forEach(ingredient => {
  const list =document.createElement('li');
  list.innerText=ingredient;
  list.classList.add('item');
  uList.append(list);
});
