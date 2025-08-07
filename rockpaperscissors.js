const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');

const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    // generate random index for choices array which could be 0, 1, 2
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    // when any button is clicked the computer choice would be either of
    // the three strings inside the array
    // console.log(computerChoice);
    let result = "";
    
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE";
    } else {
        // check the player choice
        switch(playerChoice) {
            case "rock":
                // ternary operator
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!"; 
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!"; 
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!"; 
                break;
        }
    }

    // display to HTML
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    // clear classlist before adding according to the result
    resultDisplay.classList.remove("greenText", "redText");

    switch(result) {
        case "YOU WIN!": 
            resultDisplay.classList.add("greenText"); 
            // change score and display to HTML
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!": 
            resultDisplay.classList.add("redText"); 
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}