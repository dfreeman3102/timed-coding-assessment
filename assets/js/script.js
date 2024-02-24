// makes changes to the question and answers
var body = document.body;

var questionEl = document.getElementById("question");
var a1E1 = document.createElement("button");
var a1E2 = document.createElement("button");
var a1E3 = document.createElement("button");
var a1E4 = document.createElement("button");


function setQuestion() {
    questionEl.textContent = "Question 1"
    a1E1.textContent = "Answer 1"
    a1E2.textContent = "Answer 2"
    a1E3.textContent = "Answer 3"
    a1E4.textContent = "Answer 4"

    body.appendChild(a1E1);
    body.appendChild(a1E2);
    body.appendChild(a1E3);
    body.appendChild(a1E4);
}

//Starts the questions and timer
var startEl = document.getElementById("start-btn");

function startQuiz() {
    startEl.setAttribute("style", "display:none");
    setTime();
}

startEl.addEventListener("click", startQuiz);
startEl.addEventListener("click", setQuestion);

//function to make timer countdown
var timerEl = document.getElementById("timer");

var timeLeft = 180;

function setTime() {
    timerEl.setAttribute("style", "display: content");

    var timerInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time Remaining: " + timeLeft;
    }, 1000);

}