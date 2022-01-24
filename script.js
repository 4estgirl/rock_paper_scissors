//NEW UI CODE
let computerChoice = ""

function computerChooses () {
  //Computer randomly chooses a number
  let number = Math.random() * 100
  if (number <= 50) {
      computerChoice =  "ROCK";
  } else if (number >= 51 || number <=75) {
      computerChoice =  "PAPER";
  } else {computerChoice =  "SCISSORS";}
  console.log(computerChoice)
  document.getElementById("COMP").innerHTML += "<br>" + computerChoice;
  return computerChoice;
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
} else if (userChoice === "PAPER" && computerChoice === "ROCK") {
  result = "YOU WIN";
} else if (userChoice === "SCISSORS" && computerChoice === "PAPER") {
  result = "YOU WIN";
} else {result = "COMPUTER WINS"}
document.getElementById("WINNER").innerHTML += "<br>" + result
}

//attaches event listerner to buttons
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
  computerChooses();
  playRound("ROCK");
  
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
  computerChooses();
  playRound("PAPER");
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
  computerChooses();
  playRound("SCISSORS");
});









//OLD CODE 

//plays a single round
//function playRound () {
//Prompt user to input Rock Paper or Scissors
//let userInput = prompt("Make your choice!", )
//Convert user input to all caps
//let userChoice = userInput.toUpperCase()
//Display user choice
//document.write("You chose " + userChoice + "! ")
//Computer randomly chooses a number
//let number = Math.random() * 100
//let computerChoice = "NONE CHOSEN"
//if (number <= 50) {
//    computerChoice =  "ROCK";
//} else if (number >= 51 || number <=75) {
//    computerChoice =  "PAPER";
//} else {computerChoice =  "SCISSORS";}
//console.log(computerChoice)
//document.write(" The computer chose " + computerChoice + "!  ")
//User selection is compared to Computer selection to determine winner of round
//if (computerChoice === userChoice) {
//  result = "TIE";
//} else if (userChoice === "ROCK" && computerChoice === "SCISSORS") {
//  result = "YOU WIN";
//} else if (userChoice === "PAPER" && computerChoice === "ROCK") {
//  result = "YOU WIN";
//} else if (userChoice === "SCISSORS" && computerChoice === "PAPER") {
//  result = "YOU WIN";
//} else {result = "COMPUTER WINS"}
//document.write(result + "<br>")
//}


//Loop 5 times
//round = 0
//userScore = 0
//computerScore = 0
//for (var i = 0; i < 5; ++i){
//  round += 1
//  document.write("ROUND " + round + ": ")
//  playRound();
//  if (result === "YOU WIN") {
//    userScore += 1;
//  } else if (result === "COMPUTER WINS") {
//    computerScore += 1
//  }
//  document.write("The current score is You: " + userScore + " Computer: " + computerScore + "<br>")
//}
//After the 5th round, the grand champion is announced
//if (userScore > computerScore) {
//  document.write("YOU are the grand champion!");
//} else if (userScore < computerScore) {
//  document.write("You lost, the COMPUTER is the grand champion")
//} else {document.write("There was a tie, NO ONE is the grand champion.")}