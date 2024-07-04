// While loop
let userName = "";

// prevent an empty name
while (userName == "" || userName == null) {
    userName = window.prompt("Enter your name");
}

console.log("hello ", userName);