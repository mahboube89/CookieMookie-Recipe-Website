"use strict";

import { renderSpinner, getJSON } from "./utils.js";


// import cors from "cors";
// import  {async} from "regenerator-runtime/runtime";

export function init() {

    const recipeContainer = document.querySelector("[data-detail-container]");

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

    const showOneRecipe = async function () {
        
        try {

            const id = window.location.hash.slice(1);
            if(!id) return;
            
            renderSpinner(recipeContainer);

            const data = await getJSON(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);

            let {recipe} = data.data;
            recipe = {
                id: recipe.id,
                title: recipe.title,
                servings : recipe.servings,
                cookingTime: recipe.cooking_time,
                ingredients: recipe.ingredients,
                image: customImages[Math.floor(Math.random() * customImages.length)],
                publisher:recipe.publisher,
            };
            

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

                    <div class="recipe-stats-item">
                        <p class="stats-value" >${recipe.servings}</p>
                        <span class="subtitle">Serving</span>
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
                                <span class="recipe-ingredients-quantity">${ingr.quantity || "—"}</span>
                                <span class="recipe-ingredient-unit">${ingr.unit || ""}</span>
                                ${ingr.description || "Ingredient not specified"}
                            </div>
                        </li>
                    `).join('')}
                </ul>
         
            `
            recipeContainer.innerHTML = "";
            recipeContainer.insertAdjacentHTML("afterbegin", html);
                   
            
        } catch (error) {
            console.log(error.message);
            
        }
    }

    showOneRecipe();
}