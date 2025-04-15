function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {return "rock";}
    else if (choice === 2) {return "paper";}
    else {return "scissors";}
}

function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors: ").toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore += 1;
            } else if (computerChoice === "rock") {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore += 1;
            } else {console.log("Tie!");}
        }

        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore += 1;
            } else if (computerChoice === "scissors") {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore += 1;
            } else {console.log("Tie!");}
        }

        else {
            if (computerChoice === "scissors") {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore += 1;
            } else if (computerChoice === "paper") {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore += 1;
            } else {console.log("Tie!");}
        }
    }

    for (i = 1; i <= 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    declareWinner(humanScore, computerScore);
}

function declareWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log(`You won! The score was ${humanScore}\-${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lost :( The score was ${humanScore}\-${computerScore}`);
    } else {console.log(`Tied! The score was ${humanScore}\-${computerScore}`);}
}

playGame();