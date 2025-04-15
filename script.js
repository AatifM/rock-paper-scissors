function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        return "rock";
    }

    else if (choice === 2) {
        return "paper";
    }

    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors: ");
    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore += 1;
            }
            else if (computerChoice === "rock") {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore += 1;
            }
            else {
                console.log("Tie!");
            }
        }

        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore += 1;
            }

            else if (computerChoice === "scissors") {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore += 1;
            }

            else {
                console.log("Tie!");
            }
        }

        else {
            if (computerChoice === "scissors") {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore += 1;
            }

            else if (computerChoice === "paper") {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore += 1;
            }

            else {
                console.log("Tie!");
            }
        }
    }

    let humanSelection;
    let computerSelection;

    for (i = 1; i <= 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
}

playGame();