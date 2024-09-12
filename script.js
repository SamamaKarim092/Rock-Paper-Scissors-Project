function getComputerChoice() {
    let randomChoice = Math.random();
    if (randomChoice < 0.333) {
        console.log("Rock"); 
    } else if (randomChoice > 0.333 && randomChoice < 0.666) {
        console.log("Paper");
    } else {
        console.log("Scissors")
    }
}

function getHumanChoice() {
    let input = prompt("Enter Rock,Paper or Scissors");
    if (input != Rock,Paper,Scissors) {
        console.log("Invalid Input");
    }
}
