// ordered by population of each city in Denmark
// Copenhagen, Aarhus, Odense, Aalborg, Frederiksberg

// create a nodelist to implement functionality
const slides = document.querySelectorAll(".slides img");
// start at the first slide
let slideIndex = 0;
let intervalId = null;

// show the first image on the slider
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if (slides.length > 0) {
        // show images only if it exists
        slides[slideIndex].classList.add("displaySlide");
        // display the next image after 5 seconds
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    // prevent index from going out of bounds
    if (index >= slides.length) {
        // reset the index
        slideIndex = 0;
    } else if(index < 0) {
        // show the last slide
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    // display new image
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    // stop the 5 seconds interval when prev button is clicked
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}