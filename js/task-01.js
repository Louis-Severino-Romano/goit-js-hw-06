const categoriesList = document.getElementById('categories');
  
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log("Number of categories: " + categoryItems.length);
categoryItems.forEach(item => {
    
    const headerText = item.querySelector('h2').textContent;
    
    
    const elements = item.querySelectorAll('ul > li');
    
  
    console.log("Category: " + headerText);
    console.log("Elements: " + elements.length);
});