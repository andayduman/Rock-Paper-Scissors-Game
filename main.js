let userScore = 0;
let computerScore = 0;
// DOM elements:
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const scoreBoardEl = document.querySelector(".score-board");
//getting the results p tag so that the styling does not go away
const resultEl = document.querySelector(".result p");
const rockEl = document.getElementById("rock");
const paperEl = document.getElementById("paper");
const scissorsEl = document.getElementById("scissors");

const getComputerChoice = function () {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  const choice = choices[index];
  console.log(`Computer has selected ${choice}`);
  return choice;
};

const userWin = function (userChoice, computerChoice) {
  console.log("User Wins!");
  userScore++;
  userScoreEl.textContent = userScore;
  resultEl.textContent = `User chose ${userChoice}. Computer chose ${computerChoice}. User Wins!`;
  document.getElementById(userChoice).classList.add("user-win");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("user-win");
  }, 1000);
};

const userLoss = function (userChoice, computerChoice) {
  console.log("Computer Wins!");
  computerScore++;
  computerScoreEl.textContent = computerScore;
  resultEl.textContent = `User chose ${userChoice}. Computer chose ${computerChoice}. Computer Wins!`;
  document.getElementById(userChoice).classList.add("user-loss");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("user-loss");
  }, 1000);
};

const draw = function (userChoice) {
  console.log("It was a draw!");
  resultEl.textContent = `User and Computer both chose ${userChoice}. It's a draw!`;
  document.getElementById(userChoice).classList.add("draw");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("draw");
  }, 1000);
};

const game = function (choice) {
  console.log(`User has selected ${choice}`);
  const computerChoice = getComputerChoice();
  switch (choice + computerChoice) {
    //when user wins:
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      userWin(choice, computerChoice);
      break;
    //when computer wins
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      userLoss(choice, computerChoice);
      break;
    //when there is a draw
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(choice);
      break;
  }
};

rockEl.addEventListener("click", function () {
  game("rock");
});

paperEl.addEventListener("click", function () {
  game("paper");
});

scissorsEl.addEventListener("click", function () {
  game("scissors");
});
