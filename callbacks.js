// Callbacks - a function passed as an argument to another function
// ensures that a function is not going to run before the task is complete
// helps develops asynchronous code

// used to handle asynchronous operations:
// 1. reading a file
// 2. Network requests
// 3. Interacting with databases

hello(); 
goodbye();

function hello() {
    console.log("Hello!");
}

function goodbye() {
    console.log("Goodbye!");
}

// function hello() {
//     // wait for three seconds, won't get executed
//     setTimeout(function () {
//     console.log("Hello!"); }, 3000)
// }

// to run the hello function first add a callback function
// run the hello function then after execution run the goodbye function
hello(goodbye); 
// using a callback
function hello(callback) {
    console.log("Hello!");
    callback();
}

// if the hello function takes a while to process then execute the goodbye function instead
function goodbye() {
    console.log("Goodbye!");
}

// let total = sum(2, 3);
// displayConsole(total);

// display result in html
// displayDOM(total);

// function sum(x, y) {
//     let result = x + y;
//     return result;
// }

// function displayConsole(output) {
//     console.log(output);
// }

// // display output to the DOM
// function displayDOM(output) {
//     document.getElementById("myLabel").innerHTML = output;
// }

// use callback instead

sum(2, 3, displayConsole);

// or do sum(2, 3, displayDOM);

function sum(x, y, callBack) {
    let result = x + y;
    // callback stores a function
    callBack(result);
}

function displayConsole(output) {
    console.log(output);
}

// display output to the DOM
function displayDOM(output) {
    document.getElementById("myLabel").innerHTML = output;
}