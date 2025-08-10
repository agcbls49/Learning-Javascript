const minNum = 1;
const maxNum = 100;
// generate number between 1 and 100. use Math.floor to prevent negative numbers
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(answer);

let attempts = 0;
let guess;
let running = true;

// you won't see the console answer unless you open the page inspector first before
// the prompts load quickly. uncomment the runGame to start after using inspect.
function runGame() {
    while (running) {
        guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}: `);
        // to compare number inputted convert int to string
        guess = Number(guess);

        // check if inputted is not a number
        if(isNaN(guess)) {
            window.alert("Please enter a valid number");
        } 
        else if (guess < minNum || guess > maxNum) {
            window.alert("Please enter a valid number");
        }
        else {
            attempts++;
            if(guess < answer) {
                window.alert("TOO LOW. Try Again!");
            } else if (guess > answer) {
                window.alert("TOO HIGH. Try Again!");
            } else {
                window.alert(`CORRECT!. The answer was ${answer}. It took you ${attempts} numbers of attempts`);
                // stop the game once answer is correct
                running = false;
            }
        }
    }   
}

// don't forget to uncomment to use 
// runGame();