
"use strict";

import { addEventOnElements } from "./utils.js";

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

}



