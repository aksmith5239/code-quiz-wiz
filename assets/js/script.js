//global variables
var timerEl = document.querySelector('#timer');
var headerEl = document.querySelector("#header");
var score = 0;
var pageContentEl = document.querySelector("#page-content");
var quizContentEl = document.querySelector("#quiz-content");
var startButton = document.querySelector("#start");
var reStartButton = document.querySelector("#re-start");
var highscoreEl = document.querySelector("#score");
var timeLeft = 30;

//questions and answers array: // put questions in objects -  this array will present in this order. 
var questions = [
    {
        q: "Commonly used data types DO Not include: ",
        choiceA: "1. strings",
        choiceB: "2. booleans",
        choiceC: "3. alerts",
        choiceD: "4. numbers",
        answer: "b"
    },
    {
        q: "The condition in an if/else statement is enclosed with: ",
        choiceA: "1. quotes",
        choiceB: "2. curly brackets",
        choiceC: "3. parenthesis",
        choiceD: "4. square brackets",
        answer: "c"
    },
    {
        q: "Arrays in JavaScript can be used to store: ",
        choiceA: "1. numbers and strings",
        choiceB:"2. other arrays",
        choiceC: "3. booleans",
        choiceD: "4. all of the above",
        answer: "d"
    },
    {
        q: "String values must be enclosed within _______ when being assigned to variables: ",
        choiceA: "1. commas",
        choiceB: "2. curly brackets",
        choiceC: "3. quotes",
        choiceD: "4. parenthesis",
        answer: "b"
    },
    {
        q: "A very useful tool during development and debugging for printing content to the debugger is: ",
        choiceA: "1. JavaScript",
        choiceB: "2. terminal/bash",
        choiceC: "3. for loops",
        choiceD: "4. console log",
        answer: "d"
    }
];  // end of questions array


//time creator function
document.getElementById("timer").innerHTML = "<h3>Timer: " + timeLeft + " seconds left</h3>";
// when first logging on to page, quiz content and highscore are not visible
document.getElementById("quiz-content").style.display = "none";
document.getElementById("highscore").style.display = "none";


var showQuiz = function() {
 //when quiz start button clicked: 
 document.getElementById("welcome-page").style.display = "none";
 // turn diplay to none for the welcome section
 document.getElementById("quiz-content").style.display = "block";
 
 for (var i = 0; i < questions.length; i++) {
    if (timeLeft > 0) {
      
     // set the question html
var questionDivEl = document.querySelector("#questions");
var questionEl = document.createElement("h1");
questionEl.textContent = questions[i].q;
questionEl.className = "questions";
questionDivEl.appendChild(questionEl);
var choiceEl = document.querySelector("#questions");

var choiceItemEl = document.createElement("li");
choiceItemEl.textContent = questions[i].choiceA;
choiceItemEl.className = "btn";
choiceEl.appendChild(choiceItemEl);

var choiceItemEl = document.createElement("li");
choiceItemEl.textContent = questions[i].choiceB;
choiceItemEl.className = "btn";
choiceEl.appendChild(choiceItemEl);

var choiceItemEl = document.createElement("li");
choiceItemEl.textContent = questions[i].choiceC;
choiceItemEl.className = "btn";
choiceEl.appendChild(choiceItemEl);

var choiceItemEl = document.createElement("li");
choiceItemEl.textContent = questions[i].choiceD;
choiceItemEl.className = "btn";
choiceEl.appendChild(choiceItemEl);
  
  }
 }
// quizHandler();
//  console.log(window.document);
//  console.dir(window.document);
}; // end show quiz

  // here is where our high score logic will go.
var highScoreHandler = function() {
 window.alert("You have clicked the highscore link");
};


// window.confirm("Click OK to begin");



// //timer loses time when player answers incorrectly

// // next question comes up when answer correctly
// // question screen with question and 4 answer buttons
// window.confirm("Question 1");
// var question1 = window.confirm("This is your first question");
// if (question1) {
//     window.alert("Correct!");
// } else {
//     window.alert("Wrong Answer!");
// }

// // answer correct or wrong display
// var question2 = window.confirm("This is your second question");
// if (question2) {
//     window.alert("Correct!");
// } else {
//     window.alert("Wrong Answer!");
// }

// //okay for right
// // cancel for wrong

// //presented with questions
// // array of questions
// // first question answered - presented with another question

// //when answered incorrectly: 
// //time subtracted from clock
// // buzz sound chimes
// // wrong answer displayed in answer section

// //when answered correctly 
// // correct! displayed in answer section
// // ding chime sounds

// // when all questions answered - game over
// // when time runs out --game over
// window.alert("Game Over! View Highscore");
// // view highscore 
// window.alert("You have the highscore");
// window.prompt("Add your initials here");
// // highscore page with initials of high score player
// // add initials to high score - store to localStorage
// window.alert("Thank you for playing. Play again soon!");


// if want people to replay -  random sort of questions array needs to be considered
 
//click start button and timer starts
startButton.addEventListener("click", showQuiz);
reStartButton.addEventListener("click", showQuiz);
highscoreEl.addEventListener("click", highScoreHandler);
