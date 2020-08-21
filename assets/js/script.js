//global variables
var timerEl = document.getElementById('timer');
var score = 0;

//questions and answers array: // put questions in objects -  this array will present in this order. 
var questions = [
    {
        question: "Commonly used data types DO Not include: ",
        answers: {
            a: "1. strings",
            b: "2. booleans",
            c: "3. alerts",
            d: "4. numbers",
        },
        correctAnswer: "b"
    },
    {
        question: "The condition in an if/else statement is enclosed with: ",
        answers: {
            a: "1. quotes",
            b: "2. curly brackets",
            c: "3. parenthesis",
            d: "4. square brackets",
        },
        correctAnswer: "c"
    },
    {
        question: "Arrays in JavaScript can be used to store: ",
        answers: {
            a: "1. numbers and strings",
            b: "2. other arrays",
            c: "3. booleans",
            d: "4. all of the above",
        },
        correctAnswer: "d"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables: ",
        answers: {
            a: "1. commas",
            b: "2. curly brackets",
            c: "3. quotes",
            d: "4. parenthesis",
        },
        correctAnswer: "b"
    },
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is: ",
        answers: {
            a: "1. JavaScript",
            b: "2. terminal/bash",
            c: "3. for loops",
            d: "4. console log",
        },
        correctAnswer: "d"
    }
];  // end of questions array

var timer = function() {
    // this is where our timer logic goes

}
// welcome screen with start button
window.alert("Welcome to Quiz-Wiz Challenge!");
//click start button and timer starts
window.confirm("Click OK to begin");

// loop through the questions

//timer loses time when player answers incorrectly

// next question comes up when answer correctly
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


// if want people to replay -  random sort of questions array needs to be considered