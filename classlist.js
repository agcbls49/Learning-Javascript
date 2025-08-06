// classList - Element property in Javascsript used to interact with an element's
// list of classes (CSS classes). Allows you to make reusable classes for many
// elements across your webpage.

// add(), remove(), toggle(Remove if present, Add if not), 
// replace(oldClass, newClass), contains()

const myButton = document.getElementById('myButton');
const myH1 = document.getElementById('myH1');

// add the css styling of enabled to the button
myButton.classList.add("enabled");

// reuse the enabled styling to the h1 element 
myH1.classList.add("enabled");

// remove the styling of enabled
myButton.classList.remove("enabled");

// apply the hover class css
myButton.addEventListener('mouseover', event => {
    event.target.classList.add("hover");
});

// remove hover class to revert button back to normal
myButton.addEventListener('mouseout', event => {
    event.target.classList.remove("hover");
});

// using the toggle class works the same as add and remove
myButton.addEventListener('mouseover', event => {
    event.target.classList.toggle("hover");
});

myButton.addEventListener('mouseout', event => {
    event.target.classList.toggle("hover");
});

// replace one class with another
myButton.classList.add("enabled");

// when button is clicked apply the disabled css
myButton.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")) {
        // if button is clicked twice then show this emoji shows if the button 
        // has the class disabled so button has to be clicked twice.
        // this will keep on adding the emoji when clicked multiple times
        event.target.textContent += "😡";
    } 
    else {
        // when button is clicked then it becomes disabled
        // the class of disabled is added on the HTML inspect view on the browser 
        event.target.classList.replace("enabled", "disabled");
    }
});

// does the same to the h1 tag
myH1.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")) {
        event.target.textContent += "😡";
    } 
    else {
        event.target.classList.replace("enabled", "disabled");
    }
});