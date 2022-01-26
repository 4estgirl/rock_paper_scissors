let computerChoice = "";
let result = "";
let userWinCounter = 0;
let computerWinCounter = 0;
let modal = document.querySelector(".modal");
let startOver = document.querySelector(".start-over");
let announce = document.querySelector("#announce");

function computerChooses () {
  //Computer randomly chooses a number
  let number = Math.random() * 100
  if (number <= 33) {
      computerChoice =  "ROCK";
  } else if (number >= 34 || number <=67) {
      computerChoice =  "PAPER";
  } else {computerChoice =  "SCISSORS";}
  document.getElementById("COMP").innerHTML += "<br>" + computerChoice;
  return computerChoice;
  }

//disable buttons after a player reaches 5 points
function endGame(){
  if (userWinCounter >= 5){
    document.getElementById("#rock").disabled = true;
    document.getElementById("#paper").disabled = true;
    document.getElementById("#scissors").disabled = true;
  } else if (computerWinCounter >= 5){
    document.getElementById("#rock").disabled = true;
    document.getElementById("#paper").disabled = true;
    document.getElementById("#scissors").disabled = true;
  }
}

//Refresh page
function refresh() {
  window.location.reload();
}

//Toggle Modal
function toggleModal() {
    modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
    if (event.target === modal) {
      toggleModal();
    }
}
startOver.addEventListener("click",() => {
  refresh();
});


//Announce Winner after 5 points to one player
function announceWinner(){
  if (userWinCounter == 5){
    announce.innerHTML = "You Win!!";
    toggleModal();
  }else if (computerWinCounter == 5){
    announce.innerHTML = "Computer Wins! Try Again?"
    toggleModal();
  }
}

//plays a single round
function playRound (userChoice) {
//Display user choice
document.getElementById("USER").innerHTML += "<br>" + userChoice
//User selection is compared to Computer selection to determine winner of round
if (computerChoice === userChoice) {
  result = "TIE";
} else if (userChoice === "ROCK" && computerChoice === "SCISSORS") {
  result = "YOU WIN";
  userWinCounter += 1;
} else if (userChoice === "PAPER" && computerChoice === "ROCK") {
  result = "YOU WIN";
  userWinCounter += 1;
} else if (userChoice === "SCISSORS" && computerChoice === "PAPER") {
  result = "YOU WIN";
  userWinCounter += 1;
} else {
  result = "COMPUTER WINS";
  computerWinCounter += 1;
}
document.getElementById("WINNER").innerHTML += "<br>" + result
document.getElementById("userScore").innerHTML = "Your Score: "
 + userWinCounter
 document.getElementById("computerScore").innerHTML = "Computer Score: "
 + computerWinCounter
 announceWinner();
}

//attaches event listerner to buttons
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
  endGame();
  computerChooses();
  playRound("ROCK");
});
const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
  endGame();
  computerChooses();
  playRound("PAPER");
});
const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
  endGame();
  computerChooses();
  playRound("SCISSORS");
});