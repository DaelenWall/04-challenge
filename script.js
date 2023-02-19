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
        question: "In JavaScript, what element is used to store and manipulate text usually in multiples?",
        choices: ["Arrays", "Function", "Strings", "Variables"],
        correctAnswer: "Strings"
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
var yikes = 10;
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

// if correctAnswer is chosen by user = correct
function compare(event) {
    var bananas = event.target;
    if (bananas.matches("li")) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "createDiv");
            if (bananas.textContent == questions   [qDisplay].correctAnswer) {
                scoreSet++;
                newDiv.textContent = "Correct!"
            } else {
                timeLeft = timeLeft - yikes;
                newDiv.textContent = "Incorrect... The correct answer was: " + questions[qDisplay].correctAnswer;
            }
    }
}

