// NodeList - static collection of HTML elements by (id, class, element)
// can be created by using querySelectorAll(). Similar to an array, but
// no (map, filter, reduce). NodeList won't update to automatically
// reflect changes.

let buttons = document.querySelectorAll(".myButtons");

// add an element
// step 1 create the element
const newButton = document.createElement("button");

// step 2 is add html and css properties
newButton.textContent = "Button 5";
// add button to class of myButtons
newButton.classList = "myButtons";

// step 3 apply to the DOM to show the button on the html web page
// using the classlist applies the styling of the other buttons
// button5 won't show up on the console log as a nodelist 
// because nodelists are static. To apply to the nodelist use querySelectorAll.
document.body.appendChild(newButton);
buttons = document.querySelectorAll(".myButtons");

// remove an element from a nodelist when clicked which removes them from the DOM
// and the nodelist all together
buttons.forEach(button => {
    button.addEventListener('click', event => {
        // remove the buttons from the DOM or web page when clicked
        event.target.remove();
        // remove buttons from the nodelist on the console log
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});

// print button index / node list of buttons
console.log(buttons);

// add html/css properties
// iterate through all of the buttons and change color to green
buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😎";
});

// click event 
buttons.forEach(button => {
    button.addEventListener('click', event => {
        // target is the button. when button is clicked, change color to tomato
        event.target.style.backgroundColor = "tomato";
    });
});

// mouse over and mouse out event listener
buttons.forEach(button => {
    // change button color when hovering over
    button.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    });
});

buttons.forEach(button => {
    // change button color back when not hovering
    button.addEventListener('mouseout', event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
});