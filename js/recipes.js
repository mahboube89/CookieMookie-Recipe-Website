/**
 * Copyright 2024 https://github.com/mahboube89
 * Licensed under the MIT License;
*/

"use strict"


import { renderSpinner, getJSON } from "./utils.js";
import { renderRecipes, updatePaginationButtons, paginate } from "./recipeHelpers.js";


export function init() {

    // Predefined tags for categorizing recipes
    const tags = ["Vegetarian", "Gluten-Free", "Kid-Friendly", "Low-Carb", "Quick Meal", "Healthy", "Dessert", "Vegan"];
    
    // DOM elements
    const allRecipesList= document.querySelector(".recipe-list");
    const searchForm = document.querySelector(".all-recipes__form-search");
    const paginationContainer = document.querySelector(".pagination");
    const message = document.querySelector(".message");


    let currentPage = 1; // Current page for pagination
    const RECIPE_PER_PAGE = 12; // Number of recipes per page
    let currentRecipes = []; // Array to store the current set of recipes
    

    /**
     * Fetches default recipes from a local JSON file.
     * This function retrieves recipes for initial display on page load.
     */
    const fetchDefaultRecipes = async () => {
        try {
        const response = await fetch("./assets/data/defaultRecipesData.json");

        // Check if the response is OK; throw an error if not
        if (!response.ok) throw new Error("Failed to load default recipes");

        // Parse and store recipes
        const data = await response.json();
        currentRecipes = data; // Set as the default set of recipes

        } catch (error) {
        console.log("Error fetching default recipes:", error.message);
        }
    };


    /**
     * Renders the recipes for the current page and updates pagination buttons.
     * @param {Array} recipes - The full list of recipes.
     * @param {number} page - The current page to display.
     */
    const renderPage = (recipes, page) => {

        // Get recipes for the current page using pagination
        const paginatedRecipes = paginate(recipes, page, RECIPE_PER_PAGE);

        // Render the recipes for the current page
        renderRecipes(paginatedRecipes, allRecipesList);

        // Calculate the total number of pages
        const totalPages = Math.ceil(recipes.length / RECIPE_PER_PAGE);

        // Update pagination buttons and handle page change
        updatePaginationButtons(page, totalPages, paginationContainer, (newPage) => {
            currentPage = newPage; // Update the current page
            renderPage(recipes, currentPage); // Re-render recipes for the new page
        });
    };


    /**
     * Loads and displays search results for a given query.
     * If no recipes are found, it falls back to the default recipes.
     * @param {string} query - The search term entered by the user.
     */
    const loadSearchResults = async function(query) {
        
        try {
            
            if (!query.trim()) return; // Ignore empty queries

            // Show a loading spinner while fetching data
            renderSpinner(allRecipesList);
            
            // Fetch recipes from an external API
            const data = await getJSON(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`);

            // Process and store fetched recipes
            currentRecipes = data.data.recipes.map((recipe) => ({
                id: recipe.id,
                title: recipe.title,
                image: recipe.image_url,
                cookingTime: Math.floor(Math.random() * 61) + 10, // Random number between 10 and 70
                servings: Math.floor(Math.random() * 5) + 1, // Random number between 1 and 5
                tag: tags[Math.floor(Math.random() * tags.length)], // Random tag
            }));
            
            // Check if there are any recipes; otherwise, show fallback
            if (currentRecipes.length === 0) {
                throw new Error(`No recipes found for "${query}".`);
            }
            
            currentPage = 1; // Reset to the first page and render results
            renderPage(currentRecipes, currentPage);
            
        } catch (error) {

            // Display a temporary message to the user
            message.textContent = "No recipes found. Try another search!";
            setTimeout(() => {
                message.textContent = ""; // Clear the message after 2 seconds
                searchForm.querySelector(".search-bar__input").value = ""; // Clear the input field
            }, 3000);
            
            // Fallback to the default recipes if no results are found
            await fetchDefaultRecipes();  // Fetch the default recipes
            currentPage = 1; // Reset to the first page
            renderPage(currentRecipes, currentPage); // Render the default recipes
        }
    }

    /**
     * Handles clicks on pagination buttons to navigate between pages.
     */
    paginationContainer.addEventListener("click", (event) => {
        const btn = event.target.closest(".pagination-btn"); // Identify the clicked button
        if (!btn) return;

        const newPage = +btn.dataset.page; // Extract the page number from the button
        currentPage = newPage; // Update the current page
        renderPage(currentRecipes, currentPage); // Re-render recipes for the selected page
    });

    
    /**
     * Adds event listener for the search form to handle user queries.
     * It fetches and displays search results based on the user's input.
     */
    searchForm.addEventListener("submit", (event)=> {
        event.preventDefault(); // Prevent form submission

        const query = searchForm.querySelector(".search-bar__input").value.trim(); // Get the search input
        if(!query) return; // Ignore empty input

        currentPage = 1; // Reset to the first page

        loadSearchResults(query);  // Fetch and display search results
        
    });


    /**
     * Initializes the page by loading and displaying default recipes on page load.
     */
    window.addEventListener("load", async () => {
        await fetchDefaultRecipes(); // Fetch the default recipes
        renderPage(currentRecipes, currentPage); // Display recipes for the first page
    });
    
}