
"use strict";

import { addEventOnElements, renderSpinner} from "./utils.js";
import { renderRecipes } from "./recipeHelpers.js";

export function init() {

    // Slider --------------------------- <<

    const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
    const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
    const heroSliderNextBtn = document.querySelector("[data-next-btn]");


    let currentSlidePos = 0;
    let lastActiveSliderItem = heroSliderItems[0];


    // Update slider position
    const updateSliderPos = function() {
        lastActiveSliderItem.classList.remove("active");
        heroSliderItems[currentSlidePos].classList.add("active");
        lastActiveSliderItem = heroSliderItems[currentSlidePos];
    }


    // Next button functionality
    const sliderNext = function() {
        if(currentSlidePos >= heroSliderItems.length -1) {
            currentSlidePos = 0;
        } else {
            currentSlidePos++;
        }
        updateSliderPos();
    }

    // Previous button functionality
    const slidePrev = function() {

        if(currentSlidePos <= 0) {
            currentSlidePos = heroSliderItems.length -1;
        } else {
            currentSlidePos--;
        }
        updateSliderPos();
    }

    // Event listeners
    heroSliderNextBtn.addEventListener("click",sliderNext);

    heroSliderPrevBtn.addEventListener("click", slidePrev());

    


    // Auto Slider --------------------------- <<

    let autoSlideInterval;

    const autoSlide = function() {
        autoSlideInterval = setInterval(function() {
            sliderNext();
        }, 7000);
    }

    addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function() {
        clearInterval(autoSlideInterval);
    });

    addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide );

    window.addEventListener("load", autoSlide);


    // Load the Recipes --------------------------- <<
    const RECIPES_PER_PAGE = 12;
    let currentRecipes = [];
    const allRecipesList= document.querySelector(".recipe-list");

    // Fetch default recipes from JSON file
    const fetchDefaultRecipes = async (url) => {
        try {
            renderSpinner(allRecipesList);
            const response = await fetch(url);

            if (!response.ok) throw new Error("Failed to load default recipes");

            const data = await response.json();
            return data; // Return all recipes

        } catch (error) {
            console.log("Error fetching default recipes:", error.message);
        }
    };

    // Render Recipes with Pagination
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



