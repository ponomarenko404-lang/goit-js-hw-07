const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach(category => {
    const categoryValue = category.querySelector('h2');
    console.log(`Category: ${categoryValue.textContent}`);

 const listValue = category.querySelector('ul');
  const ItemValue = listValue.querySelectorAll('li');
  console.log(`Elements: ${ItemValue.length}`);
});