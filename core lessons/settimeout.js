// setTimeout() - function in JS that allows you to schedule the execution of a 
// function after an amount of time (milliseconds). Times are approximate
// varies based on the workload of the JS runtime env. setTimeout(callback, delay);

// clearTimeout() - cancel a timeout before it triggers but the parameter has 
// to be a timeoutId. clearTimeout(timeoutId);

// Example 1
function sayHello() {
    window.alert("Hello");
}

setTimeout(sayHello, 1000);

// an anonymous function also works
setTimeout(function() {window.alert("Hi")}, 3000)

// arrow function
setTimeout(() => {window.alert("Hola")}, 5000);

// nothing shows up because its cancelled
const timeoutId = setTimeout(() => {window.alert("Hola!, Que Tal?")}, 5000);
clearTimeout(timeoutId);

// Example 2
// will run if button is clicked and executes after 3 seconds
// let timeoutId;
// function startTimer() {
//     timeoutId = setTimeout(() => {window.alert("Nihao")}, 3000);
//     console.log("STARTED");
// }

// function clearTimer() {
//     clearTimeout(timeoutId);
//     console.log("CLEARED");
// }