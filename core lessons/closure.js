// Closure - a function defined inside of another function, the inner function
// has access to the variables and scope of the outer function. Allow for
// Allows private variables and state maintenance used frequently in JS Frameworks:
// React, Vue and Angular. A closure can have more than one function inside of it.

// Example 1
// function outer() {
//     // this is considered a private variable because of closure
//     let message = "Hello";

//     function inner() {
//         console.log(message);
//     }

//     // method must be called inside outer to print when outer is called
//     inner();
// }

// outer();

// Example 2 - a closure can maintain the state of a variable
// No Closure Example
// function increment(){
//     let count = 0;
//     count++;
//     console.log(`Count increased to: ${count}`);
// }

// increment();
// // if this function is called twice then the state of the variable
// // count is reset instead of incremented
// increment();

// With Closure 
function createCounter() {
    // this is private/hidden
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to: ${count}`);
    }

    function getCount() {
        return count;
    }

    // this is an object. return an object with a method of increment and getCount
    return {increment, getCount};
}

const counter = createCounter();
counter.increment();

// now when this is called twice it shows 2 counts
counter.increment();

console.log(`The current count is ${counter.getCount()}`);

// Example 3 Score

function createGame(){
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame(); 

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}`);