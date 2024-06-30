let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2: 
            return "scissors";
    }
}

function getHumanChoice() {
    const answer = prompt("Rock, paper, scissors...");
    if (answer || answer === "") {
        switch (answer.toLowerCase()) {
            case "rock":
                return "rock";
            case "paper":
                return "paper";
            case "scissors":
                return "scissors";
            default:
                window.alert("Invalid input. Please try again");
                return getHumanChoice();
        }
    } else {
        return;
    }
}