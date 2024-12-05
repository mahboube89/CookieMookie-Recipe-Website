/**
 * Copyright 2024 https://github.com/mahboube89
 * Licensed under the MIT License;
*/

"use strict";

import { renderSpinner, getJSON } from "./utils.js";

// import cors from "cors";
// import  {async} from "regenerator-runtime/runtime";

export function init() {

    // Select the container where the recipe details will be displayed
    const recipeContainer = document.querySelector("[data-detail-container]");

    // List of custom images to be displayed with recipes
    const customImages = [
        "./assets/images/recipe/recipe-1.jpg",
        "./assets/images/recipe/recipe-2.jpg",
        "./assets/images/recipe/recipe-3.jpg",
        "./assets/images/recipe/recipe-4.jpg",
        "./assets/images/recipe/recipe-5.jpg",
        "./assets/images/recipe/recipe-6.jpeg",
        "./assets/images/recipe/recipe-7.jpeg",
        "./assets/images/recipe/recipe-8.jpeg",
        "./assets/images/recipe/recipe-9.jpeg",
        "./assets/images/recipe/recipe-10.jpeg",
        "./assets/images/recipe/recipe-11.jpeg",
        "./assets/images/recipe/recipe-12.jpg",
    ];

    // Variable to hold the current recipe data
    let recipe;

    /**
    * Fetch and render a recipe based on its ID from the URL hash.
    */
    const showOneRecipe = async function () {
        
        try {
            
            let id = window.location.hash.slice(1); // Extract the recipe ID from the URL hash

            // Fallback to a default ID if no hash is present
            if (!id) {
                id = "5ed6604591c37cdc054bc886"; // Replace with a valid default ID
            }
            
            renderSpinner(recipeContainer); // Display a spinner while loading the recipe data

            // Fetch recipe data from the API
            const data = await getJSON(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);

            // Map the API data to a custom format
            recipe = data.data.recipe;
            recipe = {
                id: recipe.id,
                title: recipe.title,
                servings : recipe.servings,
                ingredients:recipe.ingredients,
                cookingTime: recipe.cooking_time,
                image: customImages[Math.floor(Math.random() * customImages.length)],
                publisher:recipe.publisher,
            };
            
            // Generate the HTML for the recipe details
            const html = `
                <!-- Recipe Content -->
                <figure class="recipe-detail-banner img-holder">
                    <img class="img-cover" src="${recipe.image}" alt="" width="300" height="300" >
                </figure>

                <!-- Title and Bookmark Button -->
                <div class="recipe-title-wrapper">
                    <h1 class="recipe-title" >${recipe.title}</h1>

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

                <!-- Author and Date -->
                <div class="recipe-meta">

                    <div class=" meta-item">
                        <ion-icon name="calendar-outline"></ion-icon>
                        <span class="subtitle">Nov 26, 2024</span>
                    </div>

                    <div class="meta-item">
                        <ion-icon name="person-outline"></ion-icon>
                        <span class="subtitle">By ${recipe.publisher}</span>
                    </div>

                </div>

                <!-- Recipe Stats -->
                <div class="recipe-stats">
                    <div class="recipe-stats-item">
                        <p class="stats-value" >${recipe.cookingTime}</p>
                        <span class="subtitle">Minutes</span>
                    </div>

                    <div class="recipe-stats-serving">

                        <div class="recipe-stats-serving-info">
                            <p class="stats-value" >${recipe.servings}</p>
                            <span class="subtitle">Serving</span>
                        </div>
                        
                        <div class="recipe-serving-btn-wrapper" data-update-serving>
                            <button class="btn_update-serving increase-btn" data-update-to="${recipe.servings}">
                                <svg width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 12.0002C5.50024 8.66068 7.85944 5.78639 11.1348 5.1351C14.4102 4.48382 17.6895 6.23693 18.9673 9.32231C20.2451 12.4077 19.1655 15.966 16.3887 17.8212C13.6119 19.6764 9.91127 19.3117 7.55 16.9502C6.23728 15.6373 5.49987 13.8568 5.5 12.0002Z" stroke="#395733" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.875 11.2502C9.46079 11.2502 9.125 11.586 9.125 12.0002C9.125 12.4145 9.46079 12.7502 9.875 12.7502V11.2502ZM12.5 12.7502C12.9142 12.7502 13.25 12.4145 13.25 12.0002C13.25 11.586 12.9142 11.2502 12.5 11.2502V12.7502ZM12.5 11.2502C12.0858 11.2502 11.75 11.586 11.75 12.0002C11.75 12.4145 12.0858 12.7502 12.5 12.7502V11.2502ZM15.125 12.7502C15.5392 12.7502 15.875 12.4145 15.875 12.0002C15.875 11.586 15.5392 11.2502 15.125 11.2502V12.7502ZM13.25 12.0002C13.25 11.586 12.9142 11.2502 12.5 11.2502C12.0858 11.2502 11.75 11.586 11.75 12.0002H13.25ZM11.75 14.6252C11.75 15.0395 12.0858 15.3752 12.5 15.3752C12.9142 15.3752 13.25 15.0395 13.25 14.6252H11.75ZM11.75 12.0002C11.75 12.4145 12.0858 12.7502 12.5 12.7502C12.9142 12.7502 13.25 12.4145 13.25 12.0002H11.75ZM13.25 9.37524C13.25 8.96103 12.9142 8.62524 12.5 8.62524C12.0858 8.62524 11.75 8.96103 11.75 9.37524H13.25ZM9.875 12.7502H12.5V11.2502H9.875V12.7502ZM12.5 12.7502H15.125V11.2502H12.5V12.7502ZM11.75 12.0002V14.6252H13.25V12.0002H11.75ZM13.25 12.0002V9.37524H11.75V12.0002H13.25Z" fill="#395733"/>
                                </svg>
                            </button>
                            <button class="btn_update-serving decrease-btn" data-update-to="${recipe.servings}">
                                <svg width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 12.0002C5.50024 8.66068 7.85944 5.78639 11.1348 5.1351C14.4102 4.48382 17.6895 6.23693 18.9673 9.32231C20.2451 12.4077 19.1655 15.966 16.3887 17.8212C13.6119 19.6764 9.91127 19.3117 7.55 16.9502C6.23728 15.6373 5.49987 13.8568 5.5 12.0002Z" stroke="#395733" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.125 12.0002H9.82501" stroke="#395733" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="recipe-stats-item">
                        <p class="stats-value" >${recipe.ingredients.length}</p>
                        <span class="subtitle">Ingredients</span>
                    </div>

                    <div class="recipe-stats-item">
                        <p class="stats-value" >345</p>
                        <span class="subtitle">Calories</span>
                    </div>

                </div>

                <!-- Recipe Tags -->
                <div class="recipe-tags">

                    <a href="#" class="filter-chip"><span>Breakfast</span></a>
                    <a href="#" class="filter-chip"><span>American</span></a>
                    <a href="#" class="filter-chip"><span>Suger Free</span></a>
                    <a href="#" class="filter-chip"><span>${recipe.cookingTime < 30 ? "Under 30 Minutes" : "Time Intensive"}</span></a>

                </div>

                <!-- Ingredients -->
                <h2 class="recipe-ingredients-title">Ingredients</h2>

                <ul class="recipe-ingredients-list">

                    ${recipe.ingredients.map(ingr => `
                        <li class="recipe-ingredients-item">
                            <div class="recipe-ingredients-info">
                                <span class="recipe-ingredients-quantity">${ingr.quantity ? +(ingr.quantity.toFixed(2)) : "—"}</span>
                                <span class="recipe-ingredient-unit">${ingr.unit || ""}</span>
                                ${ingr.description || "Ingredient not specified"}
                            </div>
                        </li>
                    `).join('')}
                </ul>
         
            `
            recipeContainer.innerHTML = ""; // Clear the container

            recipeContainer.insertAdjacentHTML("afterbegin", html); // Render the recipe details      

            addServingUpdateListener(); // Add event listeners for serving update buttons
            
        } catch (error) {
            console.log(error.message);
        }
    }


    /**
    * Add event listeners for serving update buttons to dynamically update the recipe.
    */
    const addServingUpdateListener = function () {

        // Select the container that holds the serving update buttons
        const updateServingButtons = document.querySelector("[data-update-serving]");

        // If no update buttons are found, exit the function
        if (!updateServingButtons) return;

        // Add a click event listener to the serving update button container
        updateServingButtons.addEventListener("click", (event) => {

            // Identify the clicked button within the container
            const btn = event.target.closest(".btn_update-serving");

            if (!btn) return; // If no valid button is clicked, exit the function

            // Parse the target serving value from the button's dataset
            let updateTo = parseInt(btn.dataset.updateTo, 10);

            // Prevent updating if the target servings are less than 1
            if (updateTo < 1) return; 

            // Determine whether the clicked button is for increasing or decreasing servings
            const isIncrease = event.target.closest(".increase-btn");
            const isDecrease = event.target.closest(".decrease-btn");

            // If the increase button is clicked, increment the servings
            if (isIncrease) {
                updateServings(recipe.servings + 1);
            } else if (isDecrease && recipe.servings > 1) { // If the decrease button is clicked and the current servings are greater than 1, decrement the servings
                updateServings(recipe.servings - 1);
            }

        });
    };


    /**
     * Update the servings and ingredient quantities dynamically.
     * @param {number} newServings - The updated number of servings.
     */
    const updateServings = function (newServings) {
        
        // If no recipe data is available, exit the function
        if (!recipe) return;

        // Calculate the multiplier for adjusting ingredient quantities
        const servingMultiplier = newServings / recipe.servings;
    
        // Update the servings in the recipe object
        recipe.servings = newServings;
    
        // Update the quantity of each ingredient based on the new servings
        recipe.ingredients.forEach((ingr) => {     
            ingr.quantity = ingr.quantity * servingMultiplier;
        });
    
        // Update the serving and ingredient information in the DOM
        const servingInfo = document.querySelector(".recipe-stats-serving-info .stats-value");
        const ingredientList = document.querySelector(".recipe-ingredients-list");
    
        // Update the servings display in the DOM
        if (servingInfo) {
            servingInfo.textContent = recipe.servings;
        }
    
        // Update the ingredient list in the DOM
        if (ingredientList) {
            ingredientList.innerHTML = recipe.ingredients
            .map(
                (ingr) => `
            <li class="recipe-ingredients-item">
                <div class="recipe-ingredients-info">
                    <span class="recipe-ingredients-quantity">${
                        ingr.quantity ? +(ingr.quantity.toFixed(2)) : "—"
                    }</span>
                    <span class="recipe-ingredient-unit">${ingr.unit || ""}</span>
                    ${ingr.description || "Ingredient not specified"}
                </div>
            </li>`
            )
            .join(""); // Join all ingredient items into a single string
        }   
        
    };

    // Initialize recipe details on page load or URL hash change
    window.addEventListener("load", showOneRecipe);
    window.addEventListener("hashchange", showOneRecipe);
    
}