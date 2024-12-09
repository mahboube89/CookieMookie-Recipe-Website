/**
 * Copyright 2024 https://github.com/mahboube89
 * Licensed under the MIT License;
*/

"use strict";

import recipeImage1 from '../images/recipe/recipe-1.jpg';
import recipeImage2 from '../images/recipe/recipe-2.jpg';
import recipeImage3 from '../images/recipe/recipe-3.jpg';
import recipeImage4 from '../images/recipe/recipe-4.jpg';
import recipeImage5 from '../images/recipe/recipe-5.jpg';
import recipeImage6 from '../images/recipe/recipe-6.jpeg';
import recipeImage7 from '../images/recipe/recipe-7.jpeg';
import recipeImage8 from '../images/recipe/recipe-8.jpeg';
import recipeImage9 from '../images/recipe/recipe-9.jpeg';
import recipeImage10 from '../images/recipe/recipe-10.jpeg';
import recipeImage11 from '../images/recipe/recipe-11.jpeg';
import recipeImage12 from '../images/recipe/recipe-12.jpg';

const defaultRecipesData = [
    {
      "id": "664c8f193e7aa067e94e8639",
      "title": "Quick & Easy Breakfast",
      "image": recipeImage1,
      "cookingTime": 15,
      "servings": 2,
      "tag": "Breakfast"
    },
    {
      "id": "664c8f193e7aa067e94e86f8",
      "title": "Delicious Pasta",
      "image": recipeImage2,
      "cookingTime": 30,
      "servings": 4,
      "tag": "Lunch"
    },
    {
      "id": "5ed6604591c37cdc054bc886",
      "title": "Healthy Smoothie",
      "image": recipeImage3,
      "cookingTime": 10,
      "servings": 1,
      "tag": "Beverage"
    },
    {
      "id": "5ed6604591c37cdc054bc886",
      "title": "Classic Caesar Salad",
      "image": recipeImage4,
      "cookingTime": 20,
      "servings": 3,
      "tag": "Salad"
    },
    {
      "id": "664c8f193e7aa067e94e859d",
      "title": "Chocolate Chip Cookies",
      "image": recipeImage5,
      "cookingTime": 25,
      "servings": 6,
      "tag": "Dessert"
    },
    {
      "id":"664c8f193e7aa067e94e8335",
      "title": "Grilled Cheese Sandwich",
      "image": recipeImage6,
      "cookingTime": 10,
      "servings": 1,
      "tag": "Snack"
    },
    {
      "id": "664c8f193e7aa067e94e832e",
      "title": "Creamy Tomato Soup",
      "image": recipeImage7,
      "cookingTime": 35,
      "servings": 4,
      "tag": "Soup"
    },
    {
      "id": "664c8f193e7aa067e94e88b3",
      "title": "Vegetarian Pizza",
      "image": recipeImage8,
      "cookingTime": 40,
      "servings": 8,
      "tag": "Dinner"
    },
    {
      "id": "664c8f193e7aa067e94e866d",
      "title": "Avocado Toast",
      "image": recipeImage9,
      "cookingTime": 5,
      "servings": 1,
      "tag": "Breakfast"
    },
    {
      "id": "664c8f193e7aa067e94e88b3",
      "title": "Tropical Fruit Salad",
      "image": recipeImage10,
      "cookingTime": 15,
      "servings": 2,
      "tag": "Snack"
    },
    {
      "id": "664c8f193e7aa067e94e866d",
      "title": "Spicy Tacos",
      "image": recipeImage11,
      "cookingTime": 25,
      "servings": 3,
      "tag": "Lunch"
    },
    {
      "id": "664c8f193e7aa067e94e8ae8",
      "title": "Garlic Butter Shrimp",
      "image": recipeImage12,
      "cookingTime": 20,
      "servings": 2,
      "tag": "Dinner"
    },
    {
      "id": "664c8f193e7aa067e94e876a",
      "title": "Classic Pancakes",
      "image": recipeImage1,
      "cookingTime": 20,
      "servings": 4,
      "tag": "Breakfast"
    },
    {
      "id": "664c8f193e7aa067e94e89a3",
      "title": "Chicken Caesar Wrap",
      "image": recipeImage2,
      "cookingTime": 15,
      "servings": 2,
      "tag": "Lunch"
    },
    {
      "id": "664c8f193e7aa067e94e8a4b",
      "title": "Berry Parfait",
      "image": recipeImage3,
      "cookingTime": 10,
      "servings": 1,
      "tag": "Dessert"
    },
    {
      "id": "664c8f193e7aa067e94e8a4b",
      "title": "Spaghetti Carbonara",
      "image": recipeImage4,
      "cookingTime": 25,
      "servings": 4,
      "tag": "Dinner"
    },
    {
      "id":"664c8f193e7aa067e94e8335",
      "title": "Green Smoothie",
      "image": recipeImage5,
      "cookingTime": 30,
      "servings": 4,
      "tag": "Vegetarian"
    },
    {
      "id": "664c8f193e7aa067e94e832e",
      "title": "Grilled Chicken Salad",
      "image": recipeImage6,
      "cookingTime": 20,
      "servings": 3,
      "tag": "Healthy"
    },
    {
      "id": "664c8f193e7aa067e94e88b3",
      "title": "Beef Burger",
      "image": recipeImage7,
      "cookingTime": 20,
      "servings": 2,
      "tag": "Snack"
    },
    {
      "id": "664c8f193e7aa067e94e8a8d",
      "title": "Pumpkin Pie",
      "image": recipeImage8,
      "cookingTime": 50,
      "servings": 6,
      "tag": "Dessert"
    },
    {
      "id": "664c8f193e7aa067e94e83ac",
      "title": "Creamy Mashed Potatoes",
      "image": recipeImage9,
      "cookingTime": 30,
      "servings": 4,
      "tag": "Side Dish"
    },
    {
      "id":"664c8f193e7aa067e94e8a4b",
      "title": "Roasted Vegetables",
      "image": recipeImage10,
      "cookingTime": 35,
      "servings": 3,
      "tag": "Vegan"
    },
    {
      "id": "664c8f193e7aa067e94e8aa8",
      "title": "Mango Salsa",
      "image": recipeImage11,
      "cookingTime": 15,
      "servings": 2,
      "tag": "Snack"
    },
    {
      "id": "664c8f193e7aa067e94e8603",
      "title": "Baked Ziti",
      "image": recipeImage12,
      "cookingTime": 45,
      "servings": 5,
      "tag": "Dinner"
    }
];
  

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
    window.addEventListener("load", async function() {
        try {
            const recipes = defaultRecipesData; // Fetch recipes
            displayRecipes(recipes, allRecipesList); // Render recipes
          } catch (error) {
            console.log("Unable to load recipes. Please try again later.", error.message);
            
          }
    });

}

// Ensure the function is called when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    init();
});



