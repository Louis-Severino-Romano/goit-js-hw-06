const categoryList = document.getElementById("categories");

const categoryItems = categoryList.querySelectorAll("li.item");

console.log("Number of categories: " + categoryItems.length);
categoryItems.forEach((item) => {
  const h2Text = item.querySelector("h2").innerText;
  console.log("Category: " + h2Text);
  const listItem = item.querySelectorAll("ul > li");
  console.log("Elements: "+ listItem.length);
});
