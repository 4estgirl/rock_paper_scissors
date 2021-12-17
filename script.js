//Prompt user to input Rock Paper or Scissors
let userInput = prompt("Make your choice!", )
//Convert user input to all caps
let userChoice = userInput.toUpperCase()
//Display user choice
document.write("You chose " + userChoice + "! ")
//Computer randomly chooses a number
let number = Math.random() * 100
let computerChoice = "NONE CHOSEN"
if (number <= 50) {
    computerChoice =  "ROCK";
} else if (number >= 51 || number <=75) {
    computerChoice =  "PAPER";
} else {computerChoice =  "SCISSORS";}
console.log(computerChoice)
document.write(" The computer chose " + computerChoice + "!")
//User selection is compared to Computer selection to determine winner of round
//Winner of round is announced
//Overall game score is updated
//Loop 5 times
//After the 5th round, the grand champion is announced