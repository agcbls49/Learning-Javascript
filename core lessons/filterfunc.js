// .filter() = creates a new array by filtering out elements

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

// return a boolean
function isEven(element){
    // triple equals sign means strictly equal to 
    return element % 2 === 0;
}

function isOdd(element){
    // is the number strictly not zero, if true then it is odd
    return element % 2 !== 0;
}