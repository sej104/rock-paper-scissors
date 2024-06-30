let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1: 
            return "Paper";
        case 2: 
            return "Scissors";
    }
}

function getHumanChoice() {
    const answer = prompt("Rock, paper, scissors...");
    if (answer || answer == "") {
        switch (answer.toLowerCase()) {
            case "rock":
                return "Rock";
            case "paper":
                return "Paper";
            case "scissors":
                return "Scissors";
            default:
                window.alert("Invalid input. Please try again");
                return getHumanChoice();
        }
    } else {
        return null;
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice == "rock" && humanChoice == "scissors" ||
        computerChoice == "scissors" && humanChoice == "paper" ||
        computerChoice == "paper" && humanChoice == "rock") {
            computerChoice = computerChoice.at(0).toUpperCase().concat(computerChoice.slice(1));
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } else if (computerChoice == humanChoice) {
            window.alert("It's a tie! Play again");
            return playRound(getComputerChoice(), getHumanChoice());
        } else if (humanChoice === null) {
            console.log(`Game was canceled`);
        } else {
            humanChoice = humanChoice.at(0).toUpperCase().concat(humanChoice.slice(1));
            console.log(`You won! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
}

console.log(getHumanChoice());

// const computerSelection = getComputerChoice();
// const humanSelection = getHumanChoice();

// playRound(computerSelection, humanSelection);
