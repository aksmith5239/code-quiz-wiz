//global variables
var timerEl = document.querySelector('#timer');
var score = 0;


//questions and answers array: // put questions in objects -  this array will present in this order. 
var questions = [
    {
        q: "Commonly used data types DO Not include: ",
        choices: {
            choiceA: "1. strings",
            choiceB: "2. booleans",
            choiceC: "3. alerts",
            choiceD: "4. numbers",
        },
        a: "choiceB"
    },
    {
        q: "The condition in an if/else statement is enclosed with: ",
        choices: {
            choiceA: "1. quotes",
            choiceB: "2. curly brackets",
            choiceC: "3. parenthesis",
            choiceD: "4. square brackets",
        },
        a: "choiceC"
    },
    {
        q: "Arrays in JavaScript can be used to store: ",
        choices: {
            choiceA: "1. numbers and strings",
            choiceB:"2. other arrays",
            choiceC: "3. booleans",
            choiceD: "4. all of the above",
        },
        a: "choiceD"
    },
    {
        q: "String values must be enclosed within _______ when being assigned to variables: ",
        choices: {
            choiceA: "1. commas",
            choiceB: "2. curly brackets",
            choiceC: "3. quotes",
            choiceD: "4. parenthesis",
        },
        a: "choiceB"
    },
    {
        q: "A very useful tool during development and debugging for printing content to the debugger is: ",
        choices: {
            choiceA: "1. JavaScript",
            choiceB: "2. terminal/bash",
            choiceC: "3. for loops",
            choiceD: "4. console log",
        },
        a: "choiceD"
    }
];  // end of questions array


for (var i = 0; i < questions.length; i++) {
    var answer = prompt(questions[i].q);
}
// Need to build out this function so it sets intervals that subtract time when a question is answered incorrectly
function timer() {
    var timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
  }

// timer();
// welcome screen with start button
// window.alert("Welcome to Quiz-Wiz Challenge!");
// //click start button and timer starts


    // for (var i = 0; i < quizQuestions.length; i++) {
    //     var quizzy = quizQuestions.question[i];
    //     console.log(quizzy);
    // }


// window.confirm("Click OK to begin");

// // loop through the questions

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