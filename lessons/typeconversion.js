// Type Conversion - the ability to change the data type of a value to another (strings, numbers, booleans)

let age = window.prompt("How old are you?");
age += 1;
console.log("Happy Birthday! You are", age, "years old");

/* Example output of the above code:
   Happy Birthday! You are 171 years old
*/

// Data Type = String
console.log(typeof age);

// Number Constructor - convert string to number
age = Number(age);
age += 1;

// Data Type = Number
console.log(typeof age);

console.log("Happy Birthday! You are", age, "years old");

let x; 
let y; 
let z;

// Convert String to Number
// If you try converting a value that's not a number (ex. pizza) then it will output NaN or Not a Number
x = Number("3.14");

// Converts Number to String
y = String(3.14);

// Convert to Boolean
// Converting an empty string will output false.
z = Boolean("");
z = Boolean("pizza");

// Prints the value of x, y, z along side their data types
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);