// Do while loop - do something, check condition, repeat if condition is true
let userName = "";

// prevent an empty name
do {
    userName = window.prompt("Enter your name");
} while (userName == "" || userName == null);

console.log("hello ", userName);