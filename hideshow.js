// Hide/Show HTML
// using display - hides the image but if the button is placed below then the 
// space where the image is hidden makes the button move to the top of the space
// using visibility - doesn't move the button if its placed below the image
// and prevents the extra space created when image is hidden

const myBtn = document.getElementById('myBtn');
const myImg = document.getElementById('myImg');

// hide or show the image when button is clicked
myBtn.addEventListener('click', event => {
    if (myImg.style.visibility === "hidden") {
        // shoe the image
        myImg.style.visibility ='visible';
        // change the text of the button
        myBtn.textContent = "Hide";
    }
    else {
        // hide the image
        myImg.style.visibility = "hidden";
        myBtn.textContent = "Show";
    }
});