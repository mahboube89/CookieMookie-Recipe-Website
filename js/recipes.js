/**
 * Copyright 2024 https://github.com/mahboube89
 * Licensed under the MIT License;
*/

"use strict"


const defaultRecipesData = [
    {
      "id": "664c8f193e7aa067e94e8639",
      "title": "Quick & Easy Breakfast",
      "image": "./images/recipe/recipe-1.jpg",
      "cookingTime": 15,
      "servings": 2,
      "tag": "Breakfast"
    },
    {
      "id": "664c8f193e7aa067e94e86f8",
      "title": "Delicious Pasta",
      "image": "./images/recipe/recipe-2.jpg",
      "cookingTime": 30,
      "servings": 4,
      "tag": "Lunch"
    },
    {
      "id": "5ed6604591c37cdc054bc886",
      "title": "Healthy Smoothie",
      "image": "./images/recipe/recipe-3.jpg",
      "cookingTime": 10,
      "servings": 1,
      "tag": "Beverage"
    },
    {
      "id": "5ed6604591c37cdc054bc886",
      "title": "Classic Caesar Salad",
      "image": "./images/recipe/recipe-4.jpg",
      "cookingTime": 20,
      "servings": 3,
      "tag": "Salad"
    },
    {
      "id": "664c8f193e7aa067e94e859d",
      "title": "Chocolate Chip Cookies",
      "image": "./images/recipe/recipe-5.jpg",
      "cookingTime": 25,
      "servings": 6,
      "tag": "Dessert"
    },
    {
      "id":"664c8f193e7aa067e94e8335",
      "title": "Grilled Cheese Sandwich",
      "image": "./images/recipe/recipe-6.jpeg",
      "cookingTime": 10,
      "servings": 1,
      "tag": "Snack"
    },
    {
      "id": "664c8f193e7aa067e94e832e",
      "title": "Creamy Tomato Soup",
      "image": "./images/recipe/recipe-7.jpeg",
      "cookingTime": 35,
      "servings": 4,
      "tag": "Soup"
    },
    {
      "id": "664c8f193e7aa067e94e88b3",
      "title": "Vegetarian Pizza",
      "image": "./images/recipe/recipe-8.jpeg",
      "cookingTime": 40,
      "servings": 8,
      "tag": "Dinner"
    },
    {
      "id": "664c8f193e7aa067e94e866d",
      "title": "Avocado Toast",
      "image": "./images/recipe/recipe-9.jpeg",
      "cookingTime": 5,
      "servings": 1,
      "tag": "Breakfast"
    },
    {
      "id": "664c8f193e7aa067e94e88b3",
      "title": "Tropical Fruit Salad",
      "image": "./images/recipe/recipe-10.jpeg",
      "cookingTime": 15,
      "servings": 2,
      "tag": "Snack"
    },
    {
      "id": "664c8f193e7aa067e94e866d",
      "title": "Spicy Tacos",
      "image": "./images/recipe/recipe-11.jpeg",
      "cookingTime": 25,
      "servings": 3,
      "tag": "Lunch"
    },
    {
      "id": "664c8f193e7aa067e94e8ae8",
      "title": "Garlic Butter Shrimp",
      "image": "./images/recipe/recipe-12.jpg",
      "cookingTime": 20,
      "servings": 2,
      "tag": "Dinner"
    },
    {
      "id": "664c8f193e7aa067e94e876a",
      "title": "Classic Pancakes",
      "image": "./images/recipe/recipe-1.jpg",
      "cookingTime": 20,
      "servings": 4,
      "tag": "Breakfast"
    },
    {
      "id": "664c8f193e7aa067e94e89a3",
      "title": "Chicken Caesar Wrap",
      "image": "./images/recipe/recipe-2.jpg",
      "cookingTime": 15,
      "servings": 2,
      "tag": "Lunch"
    },
    {
      "id": "664c8f193e7aa067e94e8a4b",
      "title": "Berry Parfait",
      "image": "./images/recipe/recipe-3.jpg",
      "cookingTime": 10,
      "servings": 1,
      "tag": "Dessert"
    },
    {
      "id": "664c8f193e7aa067e94e8a4b",
      "title": "Spaghetti Carbonara",
      "image": "./images/recipe/recipe-4.jpg",
      "cookingTime": 25,
      "servings": 4,
      "tag": "Dinner"
    },
    {
      "id":"664c8f193e7aa067e94e8335",
      "title": "Green Smoothie",
      "image": "./images/recipe/recipe-5.jpg",
      "cookingTime": 30,
      "servings": 4,
      "tag": "Vegetarian"
    },
    {
      "id": "664c8f193e7aa067e94e832e",
      "title": "Grilled Chicken Salad",
      "image": "./images/recipe/recipe-6.jpeg",
      "cookingTime": 20,
      "servings": 3,
      "tag": "Healthy"
    },
    {
      "id": "664c8f193e7aa067e94e88b3",
      "title": "Beef Burger",
      "image": "./images/recipe/recipe-7.jpeg",
      "cookingTime": 20,
      "servings": 2,
      "tag": "Snack"
    },
    {
      "id": "664c8f193e7aa067e94e8a8d",
      "title": "Pumpkin Pie",
      "image": "./images/recipe/recipe-8.jpeg",
      "cookingTime": 50,
      "servings": 6,
      "tag": "Dessert"
    },
    {
      "id": "664c8f193e7aa067e94e83ac",
      "title": "Creamy Mashed Potatoes",
      "image": "./images/recipe/recipe-9.jpeg",
      "cookingTime": 30,
      "servings": 4,
      "tag": "Side Dish"
    },
    {
      "id":"664c8f193e7aa067e94e8a4b",
      "title": "Roasted Vegetables",
      "image": "./images/recipe/recipe-10.jpeg",
      "cookingTime": 35,
      "servings": 3,
      "tag": "Vegan"
    },
    {
      "id": "664c8f193e7aa067e94e8aa8",
      "title": "Mango Salsa",
      "image": "./images/recipe/recipe-11.jpeg",
      "cookingTime": 15,
      "servings": 2,
      "tag": "Snack"
    },
    {
      "id": "664c8f193e7aa067e94e8603",
      "title": "Baked Ziti",
      "image": "./images/recipe/recipe-12.jpg",
      "cookingTime": 45,
      "servings": 5,
      "tag": "Dinner"
    }
];
  


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
            currentRecipes = defaultRecipesData;
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
        currentRecipes = defaultRecipesData;
        currentPage = 1; // Reset to the first page
        renderPage(currentRecipes, currentPage); // Render the default recipes
    });
    
}