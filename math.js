// Math

// Rounding Numbers
// Output = 3
let x = 3.14;
x = Math.round(x);
console.log(x);

// Floor - rounds the number down
// Output = 3
let x = 3.14;
x = Math.floor(x);
console.log(x);

// Ceiling - rounds the number up
// Output = 4
let x = 3.14;
x = Math.ceil(x);
console.log(x);

// Power
let x = 3.14;

// x to the power of 2 
// Output = 9.8596
x = Math.pow(x, 2);

// x to the power of 3 
// Output = 30.9591
x = Math.pow(x, 3);

console.log(x);

// Square Root
// Output = 1.7720
let x = 3.14;
x = Math.sqrt(x);
console.log(x);

// Absolute Value
// Output = 3.14
let x = 3.14;
x = Math.abs(x);
console.log(x);

// Maximum and Minimum Values
// Max Output = 9
// Min Output = 3.14
let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z);

console.log(maximum);
console.log(minimum);

// Built-in Constant for the pi value 3.14
// Output = 3.14
let x;
x = Math.PI;
console.log(x);