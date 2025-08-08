// Arrays

let fruits = ["apple", "orange", "banana"];
console.log(fruits);

// access element in array (first element in array)
console.log(fruits[0]);

// change array value
fruits[0] = "coconut";

// add an element to an array
fruits.push("lemon");

// remove the last element in the array
fruits.pop();

// add element at the start of the array
fruits.unshift("mango");

// remove the first element of the array
fruits.shift();

// get array length
let length = fruits.length;
console.log(length);

// get element index
let index = fruits.indexOf("banana");
console.log(index);

// Loop through an array
let prices = [5, 10, 15, 20, 25];

// using for loop
for (let i = prices.length - 1; i >= 0; i-=1) {
    console.log(prices[i]);
}

// foreach 
for (let price of prices) {
    console.log(price);
}