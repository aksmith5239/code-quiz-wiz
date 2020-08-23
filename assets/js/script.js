//global variables
var timerEl = document.querySelector('#timer');
var headerEl = document.querySelector('#header');
var score = 0;
var pageContentEl = document.querySelector("#page-content");
var quizContentEl = document.querySelector("#quiz-content");
var startButton = document.querySelector("#start");
var reStartButton = document.querySelector("#re-start");
var highscoreEl = document.querySelector("#score");
var choiceEl = document.querySelector("#questions");
var answerEl = document.querySelector("#answers");

// var choiceA = document.getElementById('#A');
var timeLeft = 30;

//questions and answers array: // put questions in objects -  this array will present in this order. 
var questions = [
    {
        q: "Commonly used data types DO Not include: ",
        choiceA: "1. strings",
        choiceB: "2. booleans",
        choiceC: "3. alerts",
        choiceD: "4. numbers",
        correct: "2."
    },
    {
        q: "The condition in an if/else statement is enclosed with: ",
        choiceA: "1. quotes",
        choiceB: "2. curly brackets",
        choiceC: "3. parenthesis",
        choiceD: "4. square brackets",
        correct: "3."
    },
    {
        q: "Arrays in JavaScript can be used to store: ",
        choiceA: "1. numbers and strings",
        choiceB:"2. other arrays",
        choiceC: "3. booleans",
        choiceD: "4. all of the above",
        correct: "4."
    },
    {
        q: "String values must be enclosed within _______ when being assigned to variables: ",
        choiceA: "1. commas",
        choiceB: "2. curly brackets",
        choiceC: "3. quotes",
        choiceD: "4. parenthesis",
        correct: "2."
    },
    {
        q: "A very useful tool during development and debugging for printing content to the debugger is: ",
        choiceA: "1. JavaScript",
        choiceB: "2. terminal/bash",
        choiceC: "3. for loops",
        choiceD: "4. console log",
        correct: "4."
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
 document.getElementById("quiz-content").style.display = "grid";

 let lastQuestionIndex = questions.length-1;
 let runningQuestionIndex = 0;

 function showQuestion() {

     let question = questions[runningQuestionIndex];
    // var firstItem = questions[0];
    // console.log(firstItem);

        var questionDivEl = document.querySelector("#questions");
        var questionEl = document.createElement("h1");
        questionEl.textContent = question.q;
        questionEl.className = "questions";
        questionDivEl.appendChild(questionEl);
       

        var choiceButton = document.createElement("li");
        choiceButton.innerHTML = `<input type='radio' id='A'  name='answer' value = ${question.choiceA}> ` + question.choiceA;
        choiceButton.className = "btn";
        choiceEl.appendChild(choiceButton);
   
        var choiceButton = document.createElement("li");
        choiceButton.innerHTML = `<input type='radio' id='A' name='answer' value = ${question.choiceB}> ` + question.choiceB;
        choiceButton.className = "btn";
        choiceEl.appendChild(choiceButton);

        var choiceButton = document.createElement("li");
        choiceButton.innerHTML = `<input type='radio' id='A' name='answer' value = ${question.choiceC}> ` + question.choiceC;
        choiceButton.className = "btn";
        choiceEl.appendChild(choiceButton);

        var choiceButton = document.createElement("li");
        choiceButton.innerHTML = `<input type='radio' id='A'  name='answer' value = ${question.choiceD}> ` + question.choiceD;
        choiceButton.className = "btn";
        choiceEl.appendChild(choiceButton);

        var choiceButton = document.createElement("li");
        choiceButton.innerHTML = `<input type='submit' id='check-answer'> `;
        choiceButton.className = "btn";
        choiceEl.appendChild(choiceButton);
        
        

        const answer = document.querySelector("#check-answer");
        answer.onclick = function () {
            const rbs = document.querySelectorAll('input[name="answer"]');
            let selectedValue;
            for (const rb of rbs) {
                if(rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            console.log(selectedValue);
            if(questions[runningQuestionIndex].correct == selectedValue) {
                
                var answerDivEl = document.querySelector("#answers");
                var answerEl = document.createElement("h1");
                answerEl.textContent = "The Answer is Correct!";
                answerEl.className = "answers";
                answerDivEl.appendChild(answerEl);
                
            } else {
                var answerDivEl = document.querySelector("#answers");
                var answerEl = document.createElement("h2");
                answerEl.textContent = "The Answer is Wrong!";
                answerEl.className = "answers";
                answerDivEl.appendChild(answerEl);
                timeLeft = timeLeft - 10;
                console.log(timeLeft);
                document.getElementById("timer").innerHTML = "<h3>Timer: " + timeLeft + " seconds left</h3>";
                
            }

            if(runningQuestionIndex < lastQuestionIndex) {
                count = 0;
                runningQuestionIndex++;
                showQuestion();
            } else {
                console.log("Game Over");
            }
        }


        
}
showQuestion();

        
// choiceA = addEventListener("click", checkAnswer);
// console.log(choiceA);


// runningQuestionIndex ++
// showQuestion();



//  for (var i = 0; i < questions.length; i++) {
    
    
//         var questionDivEl = document.querySelector("#questions");
//         var questionEl = document.createElement("h1");
//         questionEl.textContent = questions[i].q;
//         questionEl.className = "questions";
//         questionDivEl.appendChild(questionEl);
//         var choiceEl = document.querySelector("#questions");
    
//         // var choiceItemEl = document.createElement("li");
//         // choiceItemEl.textContent = item.choiceA;
//         // choiceItemEl.className = "btn";
//         // choiceEl.appendChild(choiceItemEl);
    
//         // var choiceItemEl = document.createElement("li");
//         // choiceItemEl.textContent = item.choiceB;
//         // choiceItemEl.className = "btn";
//         // choiceEl.appendChild(choiceItemEl);
    
//         // var choiceItemEl = document.createElement("li");
//         // choiceItemEl.textContent = item.choiceC;
//         // choiceItemEl.className = "btn";
//         // choiceEl.appendChild(choiceItemEl);
    
//         // var choiceItemEl = document.createElement("li");
//         // choiceItemEl.textContent = item.choiceD;
//         // choiceItemEl.className = "btn";
//         // choiceEl.appendChild(choiceItemEl);

//         var getChoice = function() {
           
//         }
//         var choiceButton = document.createElement("li");
//         choiceButton.innerHTML = "<button onclick='" +getChoice(this.id) +"' id='A'>"+ questions[i].choiceA + "</button>";
//         choiceButton.className = "btn";
//         choiceEl.appendChild(choiceButton);
   
//         var choiceButton = document.createElement("li");
//         choiceButton.innerHTML = "<button onclick='" +getChoice(this.id) +"' id='B' >"+ questions[i].choiceB + "</button>";
//         choiceButton.className = "btn";
//         choiceEl.appendChild(choiceButton);

//         var choiceButton = document.createElement("li");
//         choiceButton.innerHTML = "<button id='C' onclick='" +getChoice(this.id) +"' id='C' >"+ questions[i].choiceC + "</button>";
//         choiceButton.className = "btn";
//         choiceEl.appendChild(choiceButton);

//         var choiceButton = document.createElement("li");
//         choiceButton.innerHTML = "<button id='D'  onclick='" +getChoice(this.id) +"' id='D'>"+ questions[i].choiceD + "</button>";
//         choiceButton.className = "btn";
//         choiceEl.appendChild(choiceButton);

//         // get id of the button clicked
       
       
// }

 
}
//  for (var i = 0; i < questions.length; i++) {
    
    
    
    
//     if (timeLeft > 0) {
      
//      // set the question html
// var questionDivEl = document.querySelector("#questions");
// var questionEl = document.createElement("h1");
// questionEl.textContent = questions[i].q;
// questionEl.className = "questions";
// questionDivEl.appendChild(questionEl);
// var choiceEl = document.querySelector("#questions");

// var choiceItemEl = document.createElement("li");
// choiceItemEl.textContent = questions[i].choiceA;
// choiceItemEl.className = "btn";
// choiceEl.appendChild(choiceItemEl);

// var choiceItemEl = document.createElement("li");
// choiceItemEl.textContent = questions[i].choiceB;
// choiceItemEl.className = "btn";
// choiceEl.appendChild(choiceItemEl);

// var choiceItemEl = document.createElement("li");
// choiceItemEl.textContent = questions[i].choiceC;
// choiceItemEl.className = "btn";
// choiceEl.appendChild(choiceItemEl);

// var choiceItemEl = document.createElement("li");
// choiceItemEl.textContent = questions[i].choiceD;
// choiceItemEl.className = "btn";
// choiceEl.appendChild(choiceItemEl);
  
//    }
//   }
// // quizHandler();
// //  console.log(window.document);
// //  console.dir(window.document);
// }; // end show quiz

  // here is where our high score logic will go.
var highScoreHandler = function() {
 window.alert("You have clicked the highscore link");
};




startButton.addEventListener("click", showQuiz);
reStartButton.addEventListener("click", showQuiz);
highscoreEl.addEventListener("click", highScoreHandler);
// choicesEl.addEventListener("click", showChoice);

