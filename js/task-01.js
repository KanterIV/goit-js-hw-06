const allCategories = document.querySelectorAll(".item");
console.log("Number of categories: ", allCategories.length);
allCategories.forEach((category) => {
  console.log("Category: ", category.firstElementChild.textContent);
  const numberEl = category.querySelectorAll("li");
  console.log("Elements: ", numberEl.length);
});
