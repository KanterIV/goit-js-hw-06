const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.getElementById("ingredients");
const ingredientsArr = [];
for (const ingredient of ingredients) {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add("item");
  ingredientsArr.push(ingredientsItem);
}

ingredientsList.append(...ingredientsArr);
