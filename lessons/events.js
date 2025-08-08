// eventListener - listen for specific mouse events to create interactive web page events: click, mouseover,
// mouseout. .addEventListener(event, callback);

// addEventListener
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

function changeColor(event) {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!";
}

myBox.addEventListener("click", changeColor);

// shortened version of the change color function is this
myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!";
});

// mouseover is when you hover over something
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it!";
});

// mouseout is when you leave something
myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me";
});

// using a button
myButton.addEventListener("click", event => {
    myBox.target.style.backgroundColor = "tomato";
    myBox.target.textContent = "OUCH!";
});

myButton.addEventListener("mouseover", event => {
    myBox.target.style.backgroundColor = "yellow";
    myBox.target.textContent = "Don't do it!";
});

myButton.addEventListener("mouseout", event => {
    myBox.target.style.backgroundColor = "lightgreen";
    myBox.target.textContent = "Click Me";
});