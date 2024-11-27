
const addEventOnElements = function( elements, eventType, callback) {
    for (let i = 0; i< elements.length; i++) {
      elements[i].addEventListener(eventType, callback);      
    }
}


const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay");


const toggleNavbar = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



const header = document.querySelector("[data-header]");

let lastScrollPos = 0;


const hideHeader = function() {
    const isScrollButtom = lastScrollPos < window.scrollY;

    if(isScrollButtom) {
        header.classList.add("hide"); 
    }
    else {
        header.classList.remove("hide"); 
    }

    lastScrollPos = window.scrollY;

}

window.addEventListener("scroll" , function() {
    if(this.window.scrollY >= 60) {
        header.classList.add("active"); 
        // hideHeader();
    }
    else {
        header.classList.remove("active"); 
    }

});

