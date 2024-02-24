//Starts the questions and timer
var startEl = document.getElementById("start-btn");

function startQuiz(){
    startEl.setAttribute("style", "display:none");
    setTime();
}

startEl.addEventListener("click",startQuiz);

//function to make timer countdown
var timerEl = document.getElementById("timer");

var timeLeft = 180;

function setTime(){
    timerEl.setAttribute("style", "display: content, justify-content: end");

    var timerInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = "Time Remaining: " + timeLeft;
    },1000);

    if(answer === false){
        timeLeft - 15;
    }

}


// makes changes to the question and answers
var questionEl = document.getElementById("question");

function setQuestion(){
    var question
}