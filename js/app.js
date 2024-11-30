

// Navbar --------------------------- <<

/**
 * Adds an event listener to multiple elements.
 * @param {NodeList} elements - List of elements to add the event listener to.
 * @param {string} eventType - The type of event to listen for (e.g., 'click').
 * @param {function} callback - The function to execute when the event occurs.
 */
const addEventOnElements = function( elements, eventType, callback) {
    for (let i = 0; i< elements.length; i++) {
      elements[i].addEventListener(eventType, callback);      
    }
}


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

openMenuBtn.addEventListener("click", () => {
    
})

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



// Slider --------------------------- <<

const heroslider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");


let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];


const updateSliderPos = function() {
    lastActiveSliderItem.classList.remove("active");
    heroSliderItems[currentSlidePos].classList.add("active");
    lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const sliderNext = function() {
    if(currentSlidePos >= heroSliderItems.length -1) {
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }
    updateSliderPos();
}

if(heroSliderNextBtn) heroSliderNextBtn.addEventListener("click" , sliderNext);

const slidePrev = function() {

    if(currentSlidePos <= 0) {
        currentSlidePos = heroSliderItems.length -1;
    } else {
        currentSlidePos--;
    }

    heroSliderPrevBtn.addEventListener("click", slidePrev);
}



// Auto Slider --------------------------- <<

// let autoSlideInterval;

// const autoSlide = function() {
//     autoSlideInterval = setInterval(function() {
//         sliderNext();
//     }, 7000);
// }

// addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function() {
//     clearInterval(autoSlideInterval);
// });

// addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide );

// window.addEventListener("load", autoSlide);
