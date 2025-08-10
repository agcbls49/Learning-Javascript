// .reduce() - reduce the elements of an array to a single value

const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

// console.log(`$${total}`);

// to ad 2 decimal places
console.log(`$${total.toFixed(2)}`);

// sum all the numbers
function sum(previous, next){
    return previous + next;
}