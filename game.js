// Get computer response
// 1. Generate a random number between 0 and 1.
// 2. If number is less than 0.33, return rock.
// 3. If number is greater than 0.33 but less than 0.66, return paper.
// 4. If number is greater than 0.66, return scissors.
//
// Get player response
// 5. Prompt user for either rock, paper, or scissors.
//
// Find results of the match
// 6. Initilize round counter to 0. 
// 7. If inputs are the same, tie 
// 8. If player uses rock and computer uses scissors, player wins. Else, computer wins.
// 9. If player uses paper and computer uses rock, player wins. Else, computer wins.
// 10. If player uses scissors and computer uses paper, player wins. Else, computer wins.
// 11. If someone wins, increase round counter by 1.
//
// Keep a scoreboard
// 12. Set human score to 0 
// 13. Set computer score to 0 
// 14. If player won, add 1 to player score.
// 15. If computer won, add 1 score to computer score.
// 16. If tie, add no points to either score
// 17. When round counter is greater than 5, announce winner 
// 18. Reset scores and round counter.

function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice < 0.33) {
    return "rock";
  }

  else if (0.33 < computerChoice && computerChoice < 0.66) {
    return "paper";
  }

  else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("What will you play?", "Rock, Paper, or Scissors");
  return humanChoice.toLowerCase();
}

function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  console.log(computerChoice);
  console.log(humanChoice);

  if (humanChoice === computerChoice) {
    return `It's a tie! ${humanChoice} is the same as ${computerChoice}`;
  }

  else if (humanChoice === "rock" && computerChoice === "scissors") {
    playerScore++;
    return `You win! ${humanChoice} beats ${computerChoice}!`;
  }

  else if (humanChoice === "paper" && computerChoice === "rock") {
    playerScore++;
    return `You win! ${humanChoice} beats ${computerChoice}!`;
  }

  else if (humanChoice === "scissors" && computerChoice === "paper") {
    playerScore++;
    return `You win! ${humanChoice} beats ${computerChoice}!`;
  }

  else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}!`;
  }
}

function playGame() {
  for (i = 0; i < 5; i++) {
    console.log(playRound());
    console.log(`Computer: ${computerScore}, Player: ${playerScore}`);
  }

  while (i === 5) {
    console.log(`Final Scores:\nComputer: ${computerScore}\nYou: ${playerScore}`);
    exit;
  }
}

let computerScore = 0;
let playerScore = 0;

playGame();
