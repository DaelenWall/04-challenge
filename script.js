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
        correctAnswer: "Arrays"
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: ""
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: ""
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: ""
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: ""
    }
];

var sco = 0;
var qDisplay = 0;
var intervalTest = 0;
var timeMinus = 10;
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

