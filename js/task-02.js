const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.getElementById("ingredients");
for (const ingredient of ingredients) {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add("item");
  ingredientsList.append(ingredientsItem);
}
