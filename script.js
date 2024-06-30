function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
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
    const userChoice = prompt("Rock, paper, scissors...");
    if (userChoice || userChoice === "") {
        switch (userChoice.toLowerCase()) {
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

console.log(getHumanChoice());
// console.log(getComputerChoice());
