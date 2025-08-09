// EventListener - Listen for specific events to 
// create interactive web page events: keydown, keyup
// document.addEventListener(event, callback);

// any key like arrows or letters
document.addEventListener("keydown", event => {
    // check which key was pressed via key on console log
    console.log(event);

    // detect if key is being pressed
    // adds 1 if key is held down continuously
    console.log(event.key);
});

const myBox = document.getElementById('myBox');
// to make the box move at a bigger distance
const moveAmount = 10;
let x = 0;
let y = 0;

// change emoji based on key down and release
// EPILEPSY / PHOTOSENSITIVITY WARNING WHEN DONE SIMULTANEOUSLY FAST!
document.addEventListener("keydown", event => {
    console.log(`Key down = ${event.key}`);

    myBox.textContent = "😲";
    myBox.style.backgroundColor = "tomato";
});

// detect what key is released
document.addEventListener("keyup", event => {
    console.log(`Key up = ${event.key}`);
    
    myBox.textContent = "😎";
    myBox.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown", event => {
    // only execute when event is arrow
    if (event.key.startsWith("Arrow")) {
        // default behavior of key is scrolling so it shows a scroll bar when pressed down
        // to prevent this add this to make the element disappear off screen
        event.preventDefault();

        switch(event.key) {
            case "ArrowUp": y -= moveAmount; break;
            case "ArrowDown": y += moveAmount; break;
            case "ArrowLeft": x -= moveAmount; break;
            case "ArrowRight": x += moveAmount; break;
        }
        // move the box accordingly
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});