//global variables
var timerEl = document.getElementById('countdown');
//quiz pseudocode
//objective to write a code quiz

// welcome screen with start button
window.alert("Welcome to Quiz-Wiz Challenge!");
//click start button and timer starts
window.confirm("Click OK to begin");
//need countdown clock
//countdown begins

// question screen with question and 4 answer buttons
window.confirm("Question 1");
var question1 = window.confirm("This is your first question");
if (question1) {
    window.alert("Correct!");
} else {
    window.alert("Wrong Answer!");
}

// answer correct or wrong display
var question2 = window.confirm("This is your second question");
if (question2) {
    window.alert("Correct!");
} else {
    window.alert("Wrong Answer!");
}

//okay for right
// cancel for wrong

//presented with questions
// array of questions
// first question answered - presented with another question

//when answered incorrectly: 
//time subtracted from clock
// buzz sound chimes
// wrong answer displayed in answer section

//when answered correctly 
// correct! displayed in answer section
// ding chime sounds

// when all questions answered - game over
// when time runs out --game over
window.alert("Game Over! View Highscore");
// view highscore 
window.alert("You have the highscore");
window.prompt("Add your initials here");
// highscore page with initials of high score player
// add initials to high score - store to localStorage
window.alert("Thank you for playing. Play again soon!");