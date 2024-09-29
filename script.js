// Computer Logic Function
function getComputerChoice() {
    let randomChoice = Math.random();
    if (randomChoice < 0.333) {
        return "rock";
    } else if (randomChoice >= 0.333 && randomChoice < 0.666) {
        return "paper";
    } else {
        return "scissors";
    }  
}

// Play Round Function
function playRound(humanChoice, computerChoice) {
    let resultText = '';

    if (humanChoice === computerChoice) {
        resultText = `It's a Tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultText = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        resultText = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    return resultText;
}

// Function to Play the Game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let gameOver = false;

    // Elements for results display
    const playerResultDiv = document.querySelector('.player-result');
    const computerResultDiv = document.querySelector('.computer-result');
    const roundResultDiv = document.querySelector('.round-result');
    const scoreDiv = document.querySelector('.score');
    const finalResultDiv = document.querySelector('.final-result');

    // Button event listeners
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!gameOver) {
                let humanChoice = this.id;
                let computerChoice = getComputerChoice();
                let result = playRound(humanChoice, computerChoice);

                // Display results in the UI
                playerResultDiv.textContent = `Player: ${humanChoice}`;
                computerResultDiv.textContent = `Computer: ${computerChoice}`;
                roundResultDiv.textContent = result;

                // Update the scores
                if (result.includes('win')) {
                    humanScore++;
                } else if (result.includes('lose')) {
                    computerScore++;
                }

                // Show the updated score
                scoreDiv.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;

                // Check if someone has won 5 times
                if (humanScore === 5) {
                    gameOver = true;
                    finalResultDiv.textContent = "You win the game!";
                    finalResultDiv.classList.add("win");
                    disableButtons(buttons);
                } else if (computerScore === 5) {
                    gameOver = true;
                    finalResultDiv.textContent = "Computer wins the game!";
                    finalResultDiv.classList.add("lose");
                    disableButtons(buttons);
                }
            }
        });
    });
}

// Function to disable buttons after the game is over
function disableButtons(buttons) {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

// Start the game
playGame();
