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

// Human Logic Function

function getHumanChoice() {
    let input = prompt("Enter Rock, Paper, or Scissors:");

    // using trim to remove the gap between "  rock  " if required
    input = input.trim().toLowerCase();
    const validChoices = ["rock", "paper", "scissors"];
    
    while (!validChoices.includes(input)) {
        input = prompt("Invalid input. Please enter Rock, Paper, or Scissors:");
        input = input.trim().toLowerCase();
    }
    
    return input;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a Tie! Both chose ${humanChoice}`);
        return "tie";
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) 
        {console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "human"}
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            return "computer";
        }
    }

// Function to Play the Entire Game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Loop to play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(humanSelection, computerSelection);

        // Update scores based on round result
        if (roundResult === "human") {
            humanScore++;
        } else if (roundResult === "computer") {
            computerScore++;
        }
    }

    // Announce the final winner
    console.log(`Final Scores: Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("The computer is the overall winner!");
    } else {
        console.log("It's an overall tie!");
    }
}

// Start the game
playGame();