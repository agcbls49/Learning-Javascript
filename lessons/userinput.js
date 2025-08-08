// User Input
// EASY - Using Window Prompt
let username = window.prompt("What's your name?");
console.log(username);

// DIFFICULT - Using HTML Text Box
let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);

    // Change text of the label tag after pressing submit button using js
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}