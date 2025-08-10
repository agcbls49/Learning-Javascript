// Function Expressions - a way to define functions as values or variables
// Function Declaration - define a reusable block of code that performs a specific task

// can be used in:
// 1. Callbacks in asynchronous operations
// 2. Higher-Order Functions
// 3. Closures
// 4. Event Listeners

// Function Declaration
// function hello() {
//     console.log("Hello");
// }

// Function Expression
const hello = function() {
    console.log("Hello");
}

// call the function using the variable
// hello();

// using callback pass function expression and print after 3s 
// setTimeout(hello, 3000);

// create function inside call back
// setTimeout(function() {
//     console.log("Hello");
// }, 3000);

// use function declaration
// const number = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(square);
// console.log(squares);

// function square(element) {
//     return Math.pow(element, 2); 
// }

// use function expression
// raise the numbers to 2
const number = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element) 
    {
        return Math.pow(element, 2); 
    }
);

console.log(squares);

// cube the numbers
const cubes = numbers.Math.map(function(element) {
    return Math.pow(element, 3);
})

console.log(cubes);

// using filter for odd or even numbers
// 2, 4, 6
const evenNums = numbers.filter(function(element) {
    return element % 2 === 0;
})

console.log(evenNums);

// 1, 3, 5
const oddNums = numbers.filter(function(element) {
    return element % 2 !== 0;
})

console.log(oddNums);

// using reduce
// sum all elements of the array
const total = numbers.reduce(function (accumulator, element) {
    return accumulator + element;
})

console.log(total);