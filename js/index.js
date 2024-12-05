/**
 * Copyright 2024 https://github.com/mahboube89
 * Licensed under the MIT License;
*/

"use strict";

const defaultRecipesData = [
    {
      "id": "664c8f193e7aa067e94e8639",
      "title": "Quick & Easy Breakfast",
      "image": "./assets/images/recipe/recipe-1.jpg",
      "cookingTime": 15,
      "servings": 2,
      "tag": "Breakfast"
    },
    {
      "id": "664c8f193e7aa067e94e86f8",
      "title": "Delicious Pasta",
      "image": "./assets/images/recipe/recipe-2.jpg",
      "cookingTime": 30,
      "servings": 4,
      "tag": "Lunch"
    },
    {
      "id": "5ed6604591c37cdc054bc886",
      "title": "Healthy Smoothie",
      "image": "./assets/images/recipe/recipe-3.jpg",
      "cookingTime": 10,
      "servings": 1,
      "tag": "Beverage"
    },
    {
      "id": "5ed6604591c37cdc054bc886",
      "title": "Classic Caesar Salad",
      "image": "./assets/images/recipe/recipe-4.jpg",
      "cookingTime": 20,
      "servings": 3,
      "tag": "Salad"
    },
    {
      "id": "664c8f193e7aa067e94e859d",
      "title": "Chocolate Chip Cookies",
      "image": "./assets/images/recipe/recipe-5.jpg",
      "cookingTime": 25,
      "servings": 6,
      "tag": "Dessert"
    },
    {
      "id":"664c8f193e7aa067e94e8335",
      "title": "Grilled Cheese Sandwich",
      "image": "./assets/images/recipe/recipe-6.jpeg",
      "cookingTime": 10,
      "servings": 1,
      "tag": "Snack"
    },
    {
      "id": "664c8f193e7aa067e94e832e",
      "title": "Creamy Tomato Soup",
      "image": "./assets/images/recipe/recipe-7.jpeg",
      "cookingTime": 35,
      "servings": 4,
      "tag": "Soup"
    },
    {
      "id": "664c8f193e7aa067e94e88b3",
      "title": "Vegetarian Pizza",
      "image": "./assets/images/recipe/recipe-8.jpeg",
      "cookingTime": 40,
      "servings": 8,
      "tag": "Dinner"
    },
    {
      "id": "664c8f193e7aa067e94e866d",
      "title": "Avocado Toast",
      "image": "./assets/images/recipe/recipe-9.jpeg",
      "cookingTime": 5,
      "servings": 1,
      "tag": "Breakfast"
    },
    {
      "id": "664c8f193e7aa067e94e88b3",
      "title": "Tropical Fruit Salad",
      "image": "./assets/images/recipe/recipe-10.jpeg",
      "cookingTime": 15,
      "servings": 2,
      "tag": "Snack"
    },
    {
      "id": "664c8f193e7aa067e94e866d",
      "title": "Spicy Tacos",
      "image": "./assets/images/recipe/recipe-11.jpeg",
      "cookingTime": 25,
      "servings": 3,
      "tag": "Lunch"
    },
    {
      "id": "664c8f193e7aa067e94e8ae8",
      "title": "Garlic Butter Shrimp",
      "image": "./assets/images/recipe/recipe-12.jpg",
      "cookingTime": 20,
      "servings": 2,
      "tag": "Dinner"
    },
    {
      "id": "664c8f193e7aa067e94e876a",
      "title": "Classic Pancakes",
      "image": "./assets/images/recipe/recipe-1.jpg",
      "cookingTime": 20,
      "servings": 4,
      "tag": "Breakfast"
    },
    {
      "id": "664c8f193e7aa067e94e89a3",
      "title": "Chicken Caesar Wrap",
      "image": "./assets/images/recipe/recipe-2.jpg",
      "cookingTime": 15,
      "servings": 2,
      "tag": "Lunch"
    },
    {
      "id": "664c8f193e7aa067e94e8a4b",
      "title": "Berry Parfait",
      "image": "./assets/images/recipe/recipe-3.jpg",
      "cookingTime": 10,
      "servings": 1,
      "tag": "Dessert"
    },
    {
      "id": "664c8f193e7aa067e94e8a4b",
      "title": "Spaghetti Carbonara",
      "image": "./assets/images/recipe/recipe-4.jpg",
      "cookingTime": 25,
      "servings": 4,
      "tag": "Dinner"
    },
    {
      "id":"664c8f193e7aa067e94e8335",
      "title": "Green Smoothie",
      "image": "./assets/images/recipe/recipe-5.jpg",
      "cookingTime": 30,
      "servings": 4,
      "tag": "Vegetarian"
    },
    {
      "id": "664c8f193e7aa067e94e832e",
      "title": "Grilled Chicken Salad",
      "image": "./assets/images/recipe/recipe-6.jpeg",
      "cookingTime": 20,
      "servings": 3,
      "tag": "Healthy"
    },
    {
      "id": "664c8f193e7aa067e94e88b3",
      "title": "Beef Burger",
      "image": "./assets/images/recipe/recipe-7.jpeg",
      "cookingTime": 20,
      "servings": 2,
      "tag": "Snack"
    },
    {
      "id": "664c8f193e7aa067e94e8a8d",
      "title": "Pumpkin Pie",
      "image": "./assets/images/recipe/recipe-8.jpeg",
      "cookingTime": 50,
      "servings": 6,
      "tag": "Dessert"
    },
    {
      "id": "664c8f193e7aa067e94e83ac",
      "title": "Creamy Mashed Potatoes",
      "image": "./assets/images/recipe/recipe-9.jpeg",
      "cookingTime": 30,
      "servings": 4,
      "tag": "Side Dish"
    },
    {
      "id":"664c8f193e7aa067e94e8a4b",
      "title": "Roasted Vegetables",
      "image": "./assets/images/recipe/recipe-10.jpeg",
      "cookingTime": 35,
      "servings": 3,
      "tag": "Vegan"
    },
    {
      "id": "664c8f193e7aa067e94e8aa8",
      "title": "Mango Salsa",
      "image": "./assets/images/recipe/recipe-11.jpeg",
      "cookingTime": 15,
      "servings": 2,
      "tag": "Snack"
    },
    {
      "id": "664c8f193e7aa067e94e8603",
      "title": "Baked Ziti",
      "image": "./assets/images/recipe/recipe-12.jpg",
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



