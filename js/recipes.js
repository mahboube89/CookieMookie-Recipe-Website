"use strict"


import { renderSpinner, getJSON } from "./utils.js";


export function init() {

    const search = { query: "", results: []};

    const allRecipesList= document.querySelector(".recipe-list");
    const searchForm = document.querySelector(".all-recipes__form-search");

    const tags = ["Vegetarian", "Gluten-Free", "Kid-Friendly", "Low-Carb", "Quick Meal", "Healthy", "Dessert", "Vegan"];

   

    const renderRecipes = function (recipes) {

        const recipeHtml = recipes.map((recipe) => 
        `
            <li class="recipe-list-item"> 

                <!-- Tag -->
                <div class="recipe-tag">
                    <span>${recipe.tag}</span>
                </div>

                <!-- Recipe Card -->
                <article class="recipe-card card">
            
                    <!-- Card Media -->
                    <figure class="card-media card-img-holder">
                        <img 
                            src="${recipe.image}"
                            alt=""  
                            height="200" 
                            width="200"
                            loading="lazy" 
                            class="img-cover">
                    </figure>
            
                    <!-- Card Content -->
                    <div class="recipe-card-content card-content">

                        <h3 class="card-title">
                            <a href="./detail.html#${recipe.id}" class="card-link text-limited">${recipe.title}</a>
                        </h3>
    
                        <!-- Meta Information -->
                        <div class="recipe-card-meta card-meta-wrapper">
                            <div class="recipe-meta-item meta-item">
                                <ion-icon name="alarm-outline"></ion-icon>
                                <span class="subtitle">${recipe.cookingTime} Minutes</span>
                            </div>
    
                            <div class="recipe-meta-item meta-item">
                                <ion-icon name="person-outline"></ion-icon>
                                <span class="subtitle">${recipe.servings} Serving</span>
                            </div>

                            <label class="bookmark-container">
                                <input type="checkbox" checked="checked" />
                                <svg
                                    class="save-regular"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                    d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"
                                    ></path>
                                </svg>
                                <svg
                                    class="save-solid"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                    d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
                                    ></path>
                                </svg>
                            </label>
                        </div>
                    </div>  
                </article>      
            </li>
        
        `).join("");

        allRecipesList.insertAdjacentHTML("afterbegin", recipeHtml);
    }


    const loadAllRecipes = async () => {
        try {

            renderSpinner(allRecipesList);


            // Fetch default recipes from JSON file
            const response = await fetch("./assets/data/defaultRecipes.json");
            
            if (!response.ok) throw new Error("Failed to load default recipes");
            
            const defaultRecipes = await response.json();
            console.log(defaultRecipes);

            // Clear previous content
            allRecipesList.innerHTML = "";

            // Render default recipes
            renderRecipes(defaultRecipes);

        } catch (error) {
          console.log("Error loading recipes:", error.message);
        //   errorContainer.textContent = "Unable to load recipes. Please try again later.";
        }
    };


    const loadSearchResults = async function(query) {
        
        try {
            
            // Show spinner
            renderSpinner(allRecipesList);
            
            const data = await getJSON(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`);

            search.results = data.data.recipes.map((recipe) => ({
                id: recipe.id,
                title: recipe.title,
                image: recipe.image_url,
                cookingTime: Math.floor(Math.random() * 61) + 10, // Random number between 10 and 70
                servings: Math.floor(Math.random() * 5) + 1, // Random number between 1 and 5
                tag: tags[Math.floor(Math.random() * tags.length)], // Random tag
            }));

            console.log(search.results);
            
            // Clear previous content
            allRecipesList.innerHTML = "";
            
            // Handle no results
            if (!search.results.length) {
                allRecipesList.innerHTML = "<p>No recipes found. Try another search!</p>";
                return;
            }
            
            renderRecipes(search.results);
            
        } catch (error) {
            console.log(error.message);
            // Fallback: Show default recipes
            const defaultRecipes = generateDefaultRecipes();
            renderRecipes(defaultRecipes);
        }
    }

    // Add event listener for search
    searchForm.addEventListener("submit", (event)=> {
        event.preventDefault();

        const query = searchForm.querySelector(".search-bar__input").value.trim();
        if(!query) return;

        loadSearchResults(query);
        searchForm.querySelector(".search-bar__input").value = "";
    });

    // Load all recipes on page load
    window.addEventListener("load", loadAllRecipes);
    
}