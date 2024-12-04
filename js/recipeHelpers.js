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
                            <ion-icon name="alarm-outline"></ion-icon>
                            <span class="subtitle">${recipe.cookingTime} Minutes</span>
                        </div>

                        <div class="recipe-meta-item meta-item">
                            <ion-icon name="person-outline"></ion-icon>
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


