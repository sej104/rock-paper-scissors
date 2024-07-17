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

function checkWinner(computerScore, userScore) {
    if (computerScore > userScore) {
        return "Computer";
    } else {
        return "User";
    }
}

function displayWinner(winner) {
    if (winner === "Computer") {
        return "Game over! Computer wins the game";
    } else {
        return "Game over! User wins the game";
    }
}

function playGame() {
    let computerScore = 0;
    let userScore = 0;
    const container = document.querySelector("#btn-container");
    const result = document.querySelector("#result");
    const computerScoreboard = document.querySelector("#computerScore");
    const userScoreBoard = document.querySelector("#userScore");

    function playRound(computerChoice, userChoice) {
        if (computerScore < 5 && userScore < 5) {
            
            if (computerChoice === "Rock" && userChoice === "Scissors" ||
                computerChoice === "Scissors" && userChoice === "Paper" ||
                computerChoice === "Paper" && userChoice === "Rock") {
                    result.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
                    computerScore += 1;
                } else if (computerChoice === userChoice) {
                    result.textContent = "It's a tie! Play again";
                    return;
                } else {
                    result.textContent = `You won! ${userChoice} beats ${computerChoice}`;
                    userScore += 1;
                }

                computerScoreboard.textContent = `Computer Score: ${computerScore}`;
                userScoreBoard.textContent = `Your Score: ${userScore}`;

                if (computerScore === 5 || userScore === 5) {
                    const winner = document.createElement("div");
                    winner.textContent = displayWinner(checkWinner(computerScore, userScore)); 
                    winner.style.backgroundColor = "yellow";      
                    
                    const body = document.querySelector("body");
                    body.appendChild(winner);
                }
        }
    }

    container.addEventListener("click", (event) => {
        const target = event.target;
    
        switch(target.id) {
            case "rock":
                return playRound(getComputerChoice(), "Rock");
            case "paper":
                return playRound(getComputerChoice(), "Paper");
            case "scissors":
                return playRound(getComputerChoice(), "Scissors");
        }
    });
}

playGame();