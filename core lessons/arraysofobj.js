// Array of Objects
const fruits = [{name: "apple", color: "red", calories: 95}, 
    {name: "orange", color: "orange", calories: 45}, 
    {name: "banana", color: "yellow", calories: 105}, 
    {name: "coconut", color: "white", calories: 159}, 
    {name: "pineapple", color: "yellow", calories: 37}];

// get the name property of the first object
console.log(fruits[0].name);
console.log(fruits[2].color);
console.log(fruits[4].calories);

// push new object into array
fruits.push({name: "grapes", color: "purple", calories: 62});
console.log(fruits);

// pop to remove an element
fruits.pop();
console.log(fruits);

// splice removes an element at certain indeces
// splice index 1 - 2
fruits.splice(1, 2);

// print all the fruit names
fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.colors));
fruits.forEach(fruit => console.log(fruit.calories));

// map - run each element through a function and return new array
const fruitNames = fruits.map(fruit => fruits.name);
const fruitColors = fruits.map(fruit => fruits.color);
const fruitCalories = fruits.map(fruit => fruits.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

// filter - will filter an array after using each element and checking a condition
const yellow = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

console.log(yellow);
console.log(lowCalFruits);
console.log(highCalFruits);

// reduce - will return a single value (in this case an object)
// accumulator/max - keeps track of the greatest value each iteration
// element/fruit - the next fruit to iterate

// return the nested object that has the maximum calories of all
const maxFruit = fruits.reduce((max, fruit) => 
    fruit.calories > max.calories ? fruit : max);

console.log(maxFruit);

const minFruit = fruits.reduce((max, fruit) => 
    fruit.calories < min.calories ? fruit : max);

console.log(minFruit);