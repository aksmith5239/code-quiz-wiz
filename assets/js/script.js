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
        choices: {
            a: "1. strings",
            b: "2. booleans",
            c: "3. alerts",
            d: "4. numbers",
        },
        answer: "b"
    },
    {
        q: "The condition in an if/else statement is enclosed with: ",
        choices: {
            a: "1. quotes",
            b: "2. curly brackets",
            c: "3. parenthesis",
            d: "4. square brackets",
        },
        answer: "c"
    },
    {
        q: "Arrays in JavaScript can be used to store: ",
        choices: {
            a: "1. numbers and strings",
            b:"2. other arrays",
            c: "3. booleans",
            d: "4. all of the above",
        },
        answer: "d"
    },
    {
        q: "String values must be enclosed within _______ when being assigned to variables: ",
        choices: {
            a: "1. commas",
            b: "2. curly brackets",
            c: "3. quotes",
            d: "4. parenthesis",
        },
        answer: "b"
    },
    {
        q: "A very useful tool during development and debugging for printing content to the debugger is: ",
        choices: {
            a: "1. JavaScript",
            b: "2. terminal/bash",
            c: "3. for loops",
            d: "4. console log",
        },
        answer: "d"
    }
];  // end of questions array
//time creator function
document.getElementById("timer").innerHTML = "<h3>Timer: " + timeLeft + " seconds left</h3>";

    //parent node  =  timer
    //insert h3 with timer and time left variable

// here is our main quiz logic
var quizHandler = function() {
    
    // document.getElementById("timer").innerHTML = "<h3>Timer: " + timeLeft + " seconds left</h3>";
    // Turn display none on for the welcome-page section and turn off for the content section
    
    // run for loop for the questions
    for (var i = 0; i < questions.length; i++) {
        if (timeLeft > 0) {
            
        // temporary window promt to test functionality
        var askQuestion = prompt(questions[i].q);
        var correctAnswer = (questions[i].answer);
        console.log(askQuestion);
        console.log(correctAnswer);
        // create HTML elements to loop through the questions
        
        //right or wrong answers
    
            if(askQuestion === correctAnswer) {
                window.alert("Correct!");
            } else {
                window.alert("Wrong Answer");
                timeLeft = (timeLeft - 10);
                console.log(timeLeft);
                document.getElementById("timer").innerHTML = "<h3>Timer: " + timeLeft+ " seconds left</h3>";
            } // end questions if statement
        } // end time left if statement
        else {
            window.alert("Your time has run out! View your score");
            return;
}
 }// end of our for loop

};


// Need to build out this function so it sets intervals that subtract time when a question is answered incorrectly
// function timer() {
//     var timeLeft = 60;
  
//     // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     var timeInterval = setInterval(function() {
//       if (timeLeft > 1) {
//         timerEl.textContent = timeLeft + ' seconds remaining';
//         timeLeft--;
//       } else if (timeLeft === 1) {
//         timerEl.textContent = timeLeft + ' second remaining';
//         timeLeft--;
//       } else {
//         timerEl.textContent = '';
//         clearInterval(timeInterval);
//       }
//     }, 1000);
//   }


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
startButton.addEventListener("click", quizHandler);
reStartButton.addEventListener("click", quizHandler);
highscoreEl.addEventListener("click", highScoreHandler);
