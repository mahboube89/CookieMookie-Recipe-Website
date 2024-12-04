
"use strict";

import { addEventOnElements, renderSpinner} from "./utils.js";
import { renderRecipes } from "./recipeHelpers.js";

export function init() {

    // Slider --------------------------- <<

    // Get all slider items and navigation buttons
    const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
    const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
    const heroSliderNextBtn = document.querySelector("[data-next-btn]");


    let currentSlidePos = 0; // Tracks the current slide position
    let lastActiveSliderItem = heroSliderItems[0]; // Keeps a reference to the last active slide


    /**
     * Updates the slider to show the current slide.
     * Removes the "active" class from the last active slide and adds it to the current slide.
     */
    const updateSliderPos = function() {
        lastActiveSliderItem.classList.remove("active");
        heroSliderItems[currentSlidePos].classList.add("active");
        lastActiveSliderItem = heroSliderItems[currentSlidePos];
    }


    /**
     * Moves the slider to the next position.
     * If at the end, it loops back to the start.
     */
    const sliderNext = function() {
        if(currentSlidePos >= heroSliderItems.length -1) {
            currentSlidePos = 0;
        } else {
            currentSlidePos++;
        }
        updateSliderPos();
    }

    /**
     * Moves the slider to the previous position.
     * If at the start, it loops back to the end.
     */
    const slidePrev = function() {

        if(currentSlidePos <= 0) {
            currentSlidePos = heroSliderItems.length -1;
        } else {
            currentSlidePos--;
        }
        updateSliderPos();
    }

    // Add event listeners for the next and previous buttons
    heroSliderNextBtn.addEventListener("click",sliderNext);
    heroSliderPrevBtn.addEventListener("click", slidePrev());

    


    // Auto Slider --------------------------- <<

    let autoSlideInterval;

    /**
     * Automatically transitions to the next slide every 7 seconds.
     */
    const autoSlide = function() {
        autoSlideInterval = setInterval(function() {
            sliderNext();
        }, 7000);
    }

    // Pause auto-slide on hover over the navigation buttons
    addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function() {
        clearInterval(autoSlideInterval);
    });

    // Resume auto-slide when the mouse leaves the navigation buttons
    addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide );

    // Start the auto-slide when the window loads
    window.addEventListener("load", autoSlide);


    // Load the Recipes --------------------------- <<

    const RECIPES_PER_PAGE = 12; // Number of recipes to display per page
    let currentRecipes = []; // Holds the recipes currently being displayed
    const allRecipesList= document.querySelector(".recipe-list"); // Container for recipe list


    /**
     * Fetches the default recipes from a JSON file.
     * @param {string} url - The URL of the JSON file containing recipes.
     * @returns {Array} - The fetched recipes data.
     */
    const fetchDefaultRecipes = async (url) => {
        try {
            renderSpinner(allRecipesList); // Show a loading spinner
            const response = await fetch(url);

            if (!response.ok) throw new Error("Failed to load default recipes");

            const data = await response.json();
            return data; // Return all recipes

        } catch (error) {
            console.log("Error fetching default recipes:", error.message);
        }
    };

    /**
     * Renders recipes in the container with optional pagination.
     * @param {Array} recipes - The array of recipes to display.
     * @param {HTMLElement} container - The container where the recipes will be rendered.
     * @param {number} recipesPerPage - The number of recipes to display per page.
     */
    const displayRecipes = (recipes, container, recipesPerPage = RECIPES_PER_PAGE) => {
        currentRecipes = recipes.slice(0, recipesPerPage); // Get recipes for the page
        renderRecipes(currentRecipes, container);
    };

    // Initialize recipes on page load
    window.addEventListener("load", async () => {
        try {
            const recipes = await fetchDefaultRecipes("./assets/data/defaultRecipesData.json"); // Fetch recipes
            displayRecipes(recipes, allRecipesList); // Render recipes
          } catch (error) {
            console.log("Unable to load recipes. Please try again later.", error.message);
            
          }
    });



}



