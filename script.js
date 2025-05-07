const roundResults = document.querySelector("#round");
const gameResults = document.querySelector("#game");
let humanScore = 0;
let computerScore = 0;

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", (event) => {
        if (humanScore === 5 || computerScore === 5) {
            return
        } else {
            choice = event.target.textContent.toLowerCase();
            playRound(choice, getComputerChoice());
        }
    });
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {return "rock";}
    else if (choice === 2) {return "paper";}
    else {return "scissors";}
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore += 1;
            roundResults.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        } else if (computerChoice === "rock") {
            computerScore += 1;
            roundResults.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        } else {roundResults.textContent = "Tie!";}
    }

    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            roundResults.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
        } else if (computerChoice === "scissors") {
            roundResults.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
        } else {roundResults.textContent = "Tie!"}
    }

    else {
        if (computerChoice === "scissors") {
            roundResults.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
        } else if (computerChoice === "paper") {
            roundResults.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
        } else {roundResults.textContent = "Tie!";}
    }

    gameResults.textContent = `score: ${humanScore} - ${computerScore}`;
    if (humanScore === 5 || computerScore === 5) {
        declareWinner(humanScore, computerScore);
    }
}

function declareWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        gameResults.textContent = `You won! The score was ${humanScore}\-${computerScore}`;
    } else if (computerScore > humanScore) {
        gameResults.textContent = `You lost :( The score was ${humanScore}\-${computerScore}`;
    } else {gameResults.textContent = `Tied! The score was ${humanScore}\-${computerScore}`;}
}