// Spread Operator - allows an iterable such as an array or string to be expanded in places where zero or more 
// arguments are expected (unpacks the elements)

// includes the [] of the array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

// spread operator (...) also removes the [] of the array and adds spacing
console.log(...numbers);

let userName = "Bro Code";
console.log(...userName);

// Get the maximum value inside the array
let maximum = Math.max(...numbers);
console.log(maximum);

// add classes to each other
let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr. Krabs", "Plankton"];

class1.push(...class2);
console.log(class1);

// console.log(...class1);