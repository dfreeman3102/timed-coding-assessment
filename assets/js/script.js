
// This has all the questions with their respective answers, including true/false values
var questions = [
    {
        question: "Question one example?",
        answers: [
            { text: "Blan 1", correct: false },
            { text: "ble 2", correct: true },
            { text: "ble 3", correct: false },
            { text: "ble 4", correct: false },
        ]
    },
    {
        question: "Question two example?",
        answers: [
            { text: "Answer 1", correct: true },
            { text: "Answer 2", correct: false },
            { text: "Answer 3", correct: false },
            { text: "Answer 4", correct: false },
        ]
    },
    {
        question: "Question three example?",
        answers: [
            { text: "Answer 1", correct: false },
            { text: "Answer 2", correct: false },
            { text: "Answer 3", correct: true },
            { text: "Answer 4", correct: false },
        ]
    },
    {
        question: "Question four example?",
        answers: [
            { text: "Answer 1", correct: false },
            { text: "Answer 2", correct: false },
            { text: "Answer 3", correct: false },
            { text: "Answer 4", correct: true },
        ]
    },
    {
        question: "Question five example?",
        answers: [
            { text: "Answer 1", correct: false },
            { text: "Answer 2", correct: true },
            { text: "Answer 3", correct: false },
            { text: "Answer 4", correct: false },
        ]
    },
    {
        question: "Question six example?",
        answers: [
            { text: "Answer 1", correct: true },
            { text: "Answer 2", correct: false },
            { text: "Answer 3", correct: false },
            { text: "Answer 4", correct: false },
        ]
    },
]

// makes changes to the question and answers
var body = document.body;
var questionEl = document.getElementById("question");
var answerBtns = document.getElementById("answer-buttons");
var nextBtn = document.getElementById("nextBtn");
var questionIndex = 0;

function setQuestion() {
    
    // sets questions and displays on screen
    var currentQuestion = questions[questionIndex];
    var questionNum = questionIndex + 1;
    questionEl.innerHTML = questionNum + ". " + currentQuestion.question;
    //  sets answers and displays on screen
    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    
}

function selectAnswer(e){
    var selectedAnswer = e.target;
    var correctAnswer = selectedAnswer.dataset.correct === "true";
    if (correctAnswer){
        selectedAnswer.classList.add("correct");
        timeLeft += 15;
    }else{
        selectedAnswer.classList.add("incorrect");
        timeLeft -= 15;
    }
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