/* www.edamam.com */

/* DOM */
const form = document.querySelector("form");
const recipesElement = document.querySelector(".recipe_search_results");

/* API Information */
const appId = "ca6656db";
const appKey = "05cb9248faf7bf7e82d9bf6fd23a7b3f";
const recipeURL = "https://api.edamam.com/search";

// Form Event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchResult = document.querySelector("input").value;

  fetchRecipe(searchResult);
});

async function fetchRecipe(searchResult) {
  const response = await fetch(
    `${recipeURL}?q=${searchResult}&app_id=${appId}&app_key=${appKey}&to=30`
  );
  const responseData = await response.json();

  displayRecipes(responseData.hits);

  console.log(responseData.hits);
}

function displayRecipes(recipes) {
  let recipeEl = "";

  recipes.forEach((recipe) => {
    recipeEl += `
      <div class="single_recipe_item">
         <img src="${
           recipe.recipe.image
         }" alt="Recipe Images" class="item_img" />

         <div class="recipe_description">
            <h2 class="title">${recipe.recipe.label}</h2>
            <a href="${
              recipe.recipe.url
            }" class="recipe_link" target="_blank">View Recipe</a>
         </div>

         <div class="recipe_information">
            <p>Calories: ${recipe.recipe.calories.toFixed(2)}</p>
            <p>Diet Label: ${recipe.recipe.dietLabels}</p>
            <p>Health Label: ${recipe.recipe.healthLabels}</p>
            <p>Source: ${recipe.recipe.source}</p>
         </div>
         </div>`;

    recipesElement.innerHTML = recipeEl;
  });
}
