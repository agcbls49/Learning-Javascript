// Callbacks - a function passed as an argument to another function
// ensures that a function is not going to run before the task is complete
// helps develops asynchronous code

// let total = sum(2, 3);
// displayConsole(total);

// // display result in html
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