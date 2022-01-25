# rock_paper_scissors

This is my first JavaScript project! The goal of this project is to use JavaScript to create a Rock-Paper-Scissors game you can play against the computer.

Goals of the game
- The game should be played for 5 rounds. Score should be displayed at all times.
- User should input "Rock" "Paper" or "Scissors". The scrips should accept these three words with any combination of capitalization.
- The computer should choose "Rock" "Paper" or "Scissors" randomly.
- Upon the results of a round, something like "You Lose! Paper beats Rock" should be displayed.
- At the end of the final round, the winner of the game should be displayed.


~NEW UI GOALS~
1. Remove logic to play 5 rounds
2. Create 3 buttons (one for each selection). Add an event listener to the buttons that calls playRound function with the correct playerSelection every time a button is clicked
3. Add a div for displaying results and change console.logs to DOM methods
4. Display the running score, and announce a winner of the game once one player reaches 5 points
