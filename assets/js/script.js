//function to make timer countdown
var timerEl = document.getElementById("timer");

var timeLeft = 180;

function setTime(){
    var timerInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = "Time Remaining: " + timeLeft;
    },1000);

    if(answer === false){
        timeLeft - 15;
    }

}

setTime();