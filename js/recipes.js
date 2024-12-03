"use strict"


import { renderSpinner, getJSON } from "./utils.js";
import { renderRecipes, updatePaginationButtons, paginate } from "./recipeHelpers.js";


export function init() {

    const tags = ["Vegetarian", "Gluten-Free", "Kid-Friendly", "Low-Carb", "Quick Meal", "Healthy", "Dessert", "Vegan"];
    
    const allRecipesList= document.querySelector(".recipe-list");
    const searchForm = document.querySelector(".all-recipes__form-search");
    const paginationContainer = document.querySelector(".pagination");


    let currentPage = 1;
    const recipesPerPage = 12;
    let currentRecipes = [];
    

    // Fetch default recipes from JSON file
    const fetchDefaultRecipes = async () => {
        try {
        const response = await fetch("./assets/data/defaultRecipesData.json");

        if (!response.ok) throw new Error("Failed to load default recipes");

        const data = await response.json();
        currentRecipes = data; // Set as default recipes

        } catch (error) {
        console.log("Error fetching default recipes:", error.message);
        }
    };


    // Render pagination and recipes
    const renderPage = (recipes, page) => {
        const paginatedRecipes = paginate(recipes, page, recipesPerPage);
        renderRecipes(paginatedRecipes, allRecipesList);

        const totalPages = Math.ceil(recipes.length / recipesPerPage);
        updatePaginationButtons(page, totalPages, paginationContainer, (newPage) => {
            currentPage = newPage;
            renderPage(recipes, currentPage);
        });
    };


    const loadSearchResults = async function(query) {
        
        try {
            
            if (!query.trim()) return;

            // Show spinner
            renderSpinner(allRecipesList);
            
            const data = await getJSON(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`);

            currentRecipes = data.data.recipes.map((recipe) => ({
                id: recipe.id,
                title: recipe.title,
                image: recipe.image_url,
                cookingTime: Math.floor(Math.random() * 61) + 10, // Random number between 10 and 70
                servings: Math.floor(Math.random() * 5) + 1, // Random number between 1 and 5
                tag: tags[Math.floor(Math.random() * tags.length)], // Random tag
            }));
            
            currentPage = 1; // Reset to first page
            renderPage(currentRecipes, currentPage);
            
        } catch (error) {
            console.log(error.message);
            console.log("No recipes found. Try another search!");
            
            // Fallback: Show default recipes
            currentRecipes = allRecipesData;
            renderPage(currentRecipes, currentPage);
        }
    }

    // Handle pagination clicks
    paginationContainer.addEventListener("click", (event) => {
        const btn = event.target.closest(".pagination-btn");
        if (!btn) return;

        const newPage = +btn.dataset.page;
        currentPage = newPage;
        renderPage(currentRecipes, currentPage);
    });

    // Add event listener for search
    searchForm.addEventListener("submit", (event)=> {
        event.preventDefault();

        const query = searchForm.querySelector(".search-bar__input").value.trim();
        if(!query) return;

        currentPage = 1; // Reset to first page

        loadSearchResults(query);
        searchForm.querySelector(".search-bar__input").value = "";
    });

    // Initialize recipes on page load
    window.addEventListener("load", async () => {
        await fetchDefaultRecipes(); // Load default recipes
        renderPage(currentRecipes, currentPage); // Render initial recipes
    });
    
}