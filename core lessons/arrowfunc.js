// Arrow functions = a concise way to write function expressions 
// good for simple functions that you use only once (parameters) => some code

const hello = () => console.log("Hello");
hello();

const greet = (name) => console.log(`Hello ${name}`);
greet("Bro");

// after three seconds display hello
setTimeout( () => console.log("Hello"), 3000);

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);