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
    if (computerChoice == "Rock" && humanChoice == "Scissors" ||
        computerChoice == "Scissors" && humanChoice == "Paper" ||
        computerChoice == "Paper" && humanChoice == "Rock") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } else if (computerChoice == humanChoice) {
            window.alert("It's a tie! Play again");
            return playRound(getComputerChoice(), getHumanChoice());
        } else if (humanChoice === null) {
            console.log(`Game was canceled`);
        } else {
            console.log(`You won! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
}

function checkWinner(computerScore, humanScore) {
    if (computerScore > humanScore) {
        return "Computer";
    } else {
        return "Human";
    }
}

function displayWinner(winner) {
    if (winner == "Computer") {
        console.log("Computer wins the game!");
    } else {
        console.log("You win the game!")
    }
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(computerChoice, humanChoice) {
        if (computerChoice == "Rock" && humanChoice == "Scissors" ||
            computerChoice == "Scissors" && humanChoice == "Paper" ||
            computerChoice == "Paper" && humanChoice == "Rock") {
                window.alert(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            } else if (computerChoice == humanChoice) {
                window.alert("It's a tie! Play again");
                return playRound(getComputerChoice(), getHumanChoice());
            } else if (humanChoice === null) {
                console.log(`Game was canceled`);
            } else {
                window.alert(`You won! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }

    console.log(`Computer score: ${computerScore}`);
    console.log(`Your score: ${humanScore}`);
    displayWinner(checkWinner(computerScore, humanScore));
}

playGame();