/**
 * Copyright 2024 https://github.com/mahboube89
 * Licensed under the MIT License;
*/

"use strict";


/**
 * Renders a list of recipes into a given container element.
 * 
 * @param {Array} recipes - Array of recipe objects to render.
 * @param {HTMLElement} container - DOM element where the recipes will be displayed.
 */
export const renderRecipes = function (recipes, container) {

    // Clear any existing content in the container
    container.innerHTML = "";

    // Generate HTML for each recipe and combine them into a single string
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
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.525 13.5C18.525 17.366 15.4693 20.5 11.7 20.5C7.93066 20.5 4.875 17.366 4.875 13.5C4.875 9.63401 7.93066 6.5 11.7 6.5C13.5101 6.5 15.2461 7.2375 16.526 8.55025C17.8059 9.86301 18.525 11.6435 18.525 13.5Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.675 13.965C12.675 14.7934 12.0202 15.465 11.2125 15.465C10.4048 15.465 9.75 14.7934 9.75 13.965C9.75 13.1365 10.4048 12.465 11.2125 12.465C12.0202 12.465 12.675 13.1365 12.675 13.965Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.95 6.5C10.95 6.91421 11.2858 7.25 11.7 7.25C12.1142 7.25 12.45 6.91421 12.45 6.5H10.95ZM12.45 3.5C12.45 3.08579 12.1142 2.75 11.7 2.75C11.2858 2.75 10.95 3.08579 10.95 3.5H12.45ZM15.1279 11.0236C15.417 10.727 15.411 10.2522 15.1145 9.963C14.8179 9.67384 14.343 9.67985 14.0539 9.97642L15.1279 11.0236ZM11.7139 12.3764C11.4247 12.673 11.4307 13.1478 11.7273 13.437C12.0239 13.7262 12.4987 13.7202 12.7879 13.4236L11.7139 12.3764ZM13.65 4.25C14.0642 4.25 14.4 3.91421 14.4 3.5C14.4 3.08579 14.0642 2.75 13.65 2.75V4.25ZM9.75 2.75C9.33579 2.75 9 3.08579 9 3.5C9 3.91421 9.33579 4.25 9.75 4.25V2.75ZM19.0863 6.89748C19.361 6.58751 19.3325 6.11349 19.0225 5.83874C18.7125 5.56399 18.2385 5.59254 17.9637 5.90252L19.0863 6.89748ZM16.0137 8.10252C15.739 8.41249 15.7675 8.88651 16.0775 9.16126C16.3875 9.43601 16.8615 9.40746 17.1363 9.09748L16.0137 8.10252ZM5.412 5.87642C5.12284 5.57985 4.648 5.57384 4.35142 5.863C4.05485 6.15216 4.04884 6.627 4.338 6.92358L5.412 5.87642ZM6.3855 9.02358C6.67466 9.32015 7.1495 9.32616 7.44608 9.037C7.74265 8.74784 7.74866 8.273 7.4595 7.97642L6.3855 9.02358ZM12.45 6.5V3.5H10.95V6.5H12.45ZM14.0539 9.97642L11.7139 12.3764L12.7879 13.4236L15.1279 11.0236L14.0539 9.97642ZM13.65 2.75H9.75V4.25H13.65V2.75ZM17.9637 5.90252L16.0137 8.10252L17.1363 9.09748L19.0863 6.89748L17.9637 5.90252ZM4.338 6.92358L6.3855 9.02358L7.4595 7.97642L5.412 5.87642L4.338 6.92358Z" fill="#000000"/>
                            </svg>
                            <span class="subtitle">${recipe.cookingTime} Minutes</span>
                        </div>

                        <div class="recipe-meta-item meta-item">
                            <svg width="20px" height="20px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.25 7.75C15.25 9.26878 14.0188 10.5 12.5 10.5C10.9812 10.5 9.75 9.26878 9.75 7.75C9.75 6.23122 10.9812 5 12.5 5C14.0188 5 15.25 6.23122 15.25 7.75Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.74967 15.7338C7.73738 15.3197 7.39179 14.994 6.97775 15.0063C6.56372 15.0186 6.23804 15.3642 6.25033 15.7782L7.74967 15.7338ZM10.385 18.95V18.2C10.3779 18.2 10.3708 18.2001 10.3637 18.2003L10.385 18.95ZM14.615 18.95L14.6363 18.2003C14.6292 18.2001 14.6221 18.2 14.615 18.2V18.95ZM18.7497 15.7782C18.762 15.3642 18.4363 15.0186 18.0222 15.0063C17.6082 14.994 17.2626 15.3197 17.2503 15.7338L18.7497 15.7782ZM17.2503 15.6332C17.2626 16.0473 17.6082 16.373 18.0222 16.3607C18.4363 16.3484 18.762 16.0028 18.7497 15.5888L17.2503 15.6332ZM14.615 12.417V13.167C14.6221 13.167 14.6292 13.1669 14.6363 13.1667L14.615 12.417ZM10.385 12.417L10.3637 13.1667C10.3708 13.1669 10.3779 13.167 10.385 13.167V12.417ZM6.25033 15.5888C6.23804 16.0028 6.56372 16.3484 6.97775 16.3607C7.39179 16.373 7.73738 16.0473 7.74967 15.6332L6.25033 15.5888ZM6.25033 15.7782C6.3165 18.0081 8.17632 19.763 10.4063 19.6997L10.3637 18.2003C8.9611 18.2401 7.79129 17.1363 7.74967 15.7338L6.25033 15.7782ZM10.385 19.7H14.615V18.2H10.385V19.7ZM14.5937 19.6997C16.8237 19.763 18.6835 18.0081 18.7497 15.7782L17.2503 15.7338C17.2087 17.1363 16.0389 18.2401 14.6363 18.2003L14.5937 19.6997ZM18.7497 15.5888C18.6835 13.3589 16.8237 11.604 14.5937 11.6673L14.6363 13.1667C16.0389 13.1269 17.2087 14.2307 17.2503 15.6332L18.7497 15.5888ZM14.615 11.667H10.385V13.167H14.615V11.667ZM10.4063 11.6673C8.17632 11.604 6.3165 13.3589 6.25033 15.5888L7.74967 15.6332C7.79129 14.2307 8.9611 13.1269 10.3637 13.1667L10.4063 11.6673Z" fill="#000000"/>
                            </svg>
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

    // Insert the generated HTML into the container
    container.insertAdjacentHTML("afterbegin", recipeHtml);
};



/**
 * Updates pagination buttons and adds event listeners for navigation.
 * 
 * @param {number} currentPage - The current page number.
 * @param {number} totalPages - The total number of pages.
 * @param {HTMLElement} container - DOM element where the pagination buttons will be rendered.
 */
export const updatePaginationButtons = (currentPage, totalPages, container) => {

    // Render Prev and Next buttons along with page info
    container.innerHTML = `
      <button class="btn pagination-btn" ${currentPage === 1 ? "disabled" : ""} data-page="${currentPage - 1}">Prev</button>
      <span class="page-info">Page ${currentPage} of ${totalPages}</span>
      <button class="btn pagination-btn" ${currentPage === totalPages ? "disabled" : ""} data-page="${currentPage + 1}">Next</button>
    `;

    const prevBtn = container.querySelector(".prev-btn");
    const nextBtn = container.querySelector(".next-btn");

    // Add event listener for the Previous button if it exists and is not disabled
    if (prevBtn && !prevBtn.disabled) {
        prevBtn.addEventListener("click", () => paginateCallback(currentPage - 1));
    }

    // Add event listener for the Next button if it exists and is not disabled
    if (nextBtn && !nextBtn.disabled) {
        nextBtn.addEventListener("click", () => paginateCallback(currentPage + 1));
    }
};
  

/**
 * Returns a subset of recipes for the current page based on pagination parameters.
 * 
 * @param {Array} recipes - Array of all recipes.
 * @param {number} currentPage - The current page number.
 * @param {number} recipesPerPage - Number of recipes to display per page.
 * @returns {Array} - A subset of recipes for the specified page.
 */
export const paginate = (recipes, currentPage, recipesPerPage) => {

    // Calculate the start and end indices for the recipes to display
    const start = (currentPage - 1) * recipesPerPage;
    const end = currentPage * recipesPerPage;

    // Return the sliced array of recipes for the current page
    return recipes.slice(start, end);
};


