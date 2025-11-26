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

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const homeScore = document.querySelectorAll("#playerScore");
const awayScore = document.querySelectorAll("#computerScore");
const message = document.querySelector("#message");
const inGame = document.querySelectorAll(".inGame");
const results = document.querySelector(".results");
const playAgain = document.querySelector("#playAgain");

let computerScore = 0;
let playerScore = 0;

rock.addEventListener("click", () => {
  rock.classList.add("selected");
  paper.classList.remove("selected");
  scissors.classList.remove("selected");
  playRound("rock");
});

paper.addEventListener("click", () => {
  rock.classList.remove("selected");
  paper.classList.add("selected");
  scissors.classList.remove("selected");
  playRound("paper");
});

scissors.addEventListener("click", () => {
  rock.classList.remove("selected");
  paper.classList.remove("selected");
  scissors.classList.add("selected");
  playRound("scissors");
});

playAgain.addEventListener("click", () => {
  results.classList.toggle("hidden");
  inGame.forEach(div => div.classList.toggle("hidden"));
  playerScore = 0;
  computerScore = 0;
  updateScores(computerScore, playerScore);
});

message.textContent = `click an image to play`;

function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice < 0.33) {
    rock.classList.add("computer");
    paper.classList.remove("computer");
    scissors.classList.remove("computer");
    return "rock";
  }

  else if (0.33 < computerChoice && computerChoice < 0.66) {
    rock.classList.remove("computer");
    paper.classList.add("computer");
    scissors.classList.remove("computer");
    return "paper";
  }

  else {
    rock.classList.remove("computer");
    paper.classList.remove("computer");
    scissors.classList.add("computer");
    return "scissors";
  }
}

function updateScores(computerScore, playerScore) {
  homeScore.forEach(score => score.textContent = `${playerScore}`);
  awayScore.forEach(score => score.textContent = `${computerScore}`);
}

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    message.textContent = `it's a tie! ${humanChoice} is the same as ${computerChoice}`;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    playerScore++;
    homeScore.textContent = `${playerScore}`;
    message.textContent = `you win! ${humanChoice} beats ${computerChoice}!`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    playerScore++;
    homeScore.textContent = `${playerScore}`;
    message.textContent = `you win! ${humanChoice} beats ${computerChoice}!`;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    playerScore++;
    homeScore.textContent = `${playerScore}`;
    message.textContent = `you win! ${humanChoice} beats ${computerChoice}!`;
  } else {
    computerScore++;
    awayScore.textContent = `${computerScore}`;
    message.textContent = `you lose! ${computerChoice} beats ${humanChoice}!`;
  };

  if (playerScore === 3) {
    results.classList.toggle("hidden");
    inGame.forEach(div => div.classList.toggle("hidden"));
    endMessage.textContent = `you won the game`;
  } else if (computerScore === 3) {
    results.classList.toggle("hidden");
    inGame.forEach(div => div.classList.toggle("hidden"));
    endMessage.textContent = `you lost the game`;
  };
  
  updateScores(computerScore, playerScore);
  displayResults();
}

updateScores(computerScore, playerScore);
