// Constant -  a variable that can't be changed

let pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle: ");
radius = Number(radius);
circumference = 2 * pi * radius;
console.log("The circumference is:", circumference);

radius = window.prompt("Enter the radius of a circle: ");
radius = Number(radius);

circumference = 2 * pi * radius;
console.log("The circumference is:", circumference);

// Using Constant
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle: ");
radius = Number(radius);

/* Someone can change the code and change the value of pi so use const to make sure
it still outputs the right value even after someone changed the code */
PI = 420.69;

circumference = 2 * PI * radius;
console.log("The circumference is:", circumference);