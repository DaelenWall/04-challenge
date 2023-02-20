//html pulls
var timer = document.querySelector("#timer");
var score = document.querySelector("#score");
var startBtn = document.querySelector("#startBtn");
var ulTest =document.createElement("ul");


//global variables
var questions = [
    {
        question: "In JavaScript, what element is used to store and manipulate text, usually in multiples?",
        choices: ["Variables", "Recorders", "Arrays", "Strings"],
        correctAnswer: "Strings"
    },
    {
        question: "What is the language or list of instructions that are executed by the computer (how JavaScript is built)?",
        choices: ["Syntax", "JSON", "Scope", "Output"],
        correctAnswer: "Syntax"
    },
    {
        question: "What is the name of the statement that is used to exit or end a loop?",
        choices: ["Close Statement", "Falter Statement", "Conditional Statement", "Break Statement"],
        correctAnswer: "Break Statement"
    },
    {
        question: "What is the element called that is used to describe the set of variables, objects, and functions you explicitly have access to?",
        choices: ["Restriction", "Output Level", "Range", "Scope"],
        correctAnswer: "Scope"
    },
    {
        question: "JavaScript does NOT have this function built-in, which is commonly used to print or display data in other languages.",
        choices: ["Show", "Display", "Speak", "Output"],
        correctAnswer: "Output"
    }
];

var scoreSet = 0;
var qDisplay = 0;
var intervalTest = 0;
var yikes = 5;
var timeLeft = 50;


// start button function
startBtn.addEventListener("click", function(){
    if (intervalTest == 0) {
        intervalTest = setInterval(function(){
            timeLeft--;
            timer.textContent = "Time: " + timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(intervalTest);
                    timer.textContent = "No Time Left!";
                }
        }, 1000);
    }
    render(qDisplay);
});

// render questions function
function render(qDisplay) {
    // set to 0
    score.innerHTML="";
    ulTest.innerHTML="";
    // make the questions appear one at a time
    for (var i = 0; i < questions.length; i++){
        var cueQuestion = questions[qDisplay].question;
        var userChoice = questions[qDisplay].choices;
        score.textContent = cueQuestion;
    }
    // make the choices appear to match the question
        userChoice.forEach(function (newItem){
            var liNew = document.createElement("li");
                liNew.textContent = newItem;
                score.appendChild(ulTest);
                ulTest.appendChild(liNew);
                liNew.addEventListener("click", (compare));
            })
}

function compare(event) {
    var userChoice = event.target;

    if (userChoice.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        if (userChoice.textContent == questions[qDisplay].correctAnswer) {
            scoreSet++;
            createDiv.textContent = "Correct!";
        } else {
            timeLeft = timeLeft - yikes;
            scoreSet--;
            createDiv.textContent = "Incorrect! The correct answer was: " + questions[qDisplay].correctAnswer;
        }

    }

// I want questions to keep going after choice selection
qDisplay++;
    if (qDisplay >= questions.length) {
        allDone();
    } else {
        render(qDisplay);
    }        
}

// point total test
function allDone() {
    timer.innerHTML="";
    score.innerHTML="";
    
        if (timeLeft >= 0) {
            var pointTotal = timeLeft
            var newP = document.createElement("p");
            clearInterval(intervalTest);
            newP.textContent = "Congrats! You got " + pointTotal + " points";

            score.appendChild(newP);
        }

        if (qDisplay >= 0) {
            var timeLeft2 = timeLeft;
            var newP2 = document.createElement("p");
            clearInterval(intervalTest);
            newP.textContent = "You got: " + timeLeft2;

            score.appendChild(newP2);
        }
// highscore preparation
    var newLabel = document.createElement("label");
    newLabel.setAttribute("id", "createLabel");
    newLabel.textContent = "Name: ";
    qDisplay.appendChild(newLabel);

//user types...
    var userInput = document.createElement("input");
    userInput.setAttribute("type", "text");
    userInput.textContent = "id", "initials";
    qDisplay.appendChild(userInput);

//submit button and user is done
    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("id", "submit");
    submitBtn.textContent = "Submit";
    qDisplay.appendChild(submitBtn);


// local storage next. will probably pull from previous lessons.  

// need to connect label/input/button to local storage too.  will need a click function.


}

