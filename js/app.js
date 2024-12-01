"use strict";

import { addEventOnElements } from "./utils.js";



// Detect current page
const currentPage = document.body.dataset.page;

if (currentPage === "index") {

    import("./index.js").then((module) => module.init());

} else if (currentPage === "recipes") {

    import("./recipes.js").then((module) => module.init());

} else if (currentPage === "detail") {
    
    import("./detail.js").then((module) => module.init());
}


// Navbar --------------------------- <<

// Selects the navbar, toggler buttons, and overlay elements by their data attributes.

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay");

const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");


/**
 * Toggles the visibility of the navbar and overlay.
 * Also toggles a class on the body to indicate the navigation is active.
 */
const toggleNavbar = function() {
    navbar.classList.toggle("active"); // Show or hide the navbar
    overlay.classList.toggle("active"); // Show or hide the overlay
    document.body.classList.toggle("nav-active"); // Prevent scrolling when nav is active
    openMenuBtn.classList.toggle("hidden");
    closeMenuBtn.classList.toggle("visible");
    if (navbar.classList.contains("active")) header.classList.remove("active");
}


// Attach a "click" event listener to all nav toggler buttons.
addEventOnElements(navTogglers, "click", toggleNavbar);


// Selects the header element by its data attribute.
const header = document.querySelector("[data-header]");

// Stores the last scroll position to detect scroll direction.
let lastScrollPos = 0;


/**
 * Hides or shows the header based on scroll direction.
 * Adds the "hide" class when scrolling down and removes it when scrolling up.
 */
const hideHeader = function() {

    // Check if the user is scrolling down
    const isScrollButtom = lastScrollPos < window.scrollY; 

    if(isScrollButtom) {
        header.classList.add("hide");  // Hide the header
    }
    else {
        header.classList.remove("hide");  // Show the header
    }

    // Update the last scroll position
    lastScrollPos = window.scrollY;

}


// Adds a "scroll" event listener to the window to make the header dynamic.
window.addEventListener("scroll" , function() {
    if(this.window.scrollY >= 60) {
        header.classList.add("active"); // Add "active" class when scrolled 60px or more
        // hideHeader();
    }
    else {
        header.classList.remove("active"); // Remove "active" class when scrolled less than 60px
    }

});
