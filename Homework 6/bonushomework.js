let recipeTitle = prompt('Enter the recipe name:');
let ingredientCount = prompt('How many ingredients do you need?');

let titleElement = document.getElementById("recipeTitle");
let listElement = document.getElementById("ingredientList");

titleElement.innerText = recipeTitle;

for (let i= 0; i < ingredientCount; i++) {
let ingredient = prompt('Enter ingredient'+ (i + 1)+ ':');

listElement.innerHTML +='<li>' + ingredient + '</li>';

}


