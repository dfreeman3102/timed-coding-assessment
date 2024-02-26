
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
var timeLeft = 180;
function setQuestion() {
    resetAll();
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
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}

function selectAnswer(e) {
    var selectedAnswer = e.target;
    var correctAnswer = selectedAnswer.dataset.correct === "true";
    // if answer is correct, it adds 15 seconds, if wrong subs 15 seconds.
    if (correctAnswer) {
        selectedAnswer.classList.add("correct");
        timeLeft += 15;
    } else {
        selectedAnswer.classList.add("incorrect");
        timeLeft -= 15;
    }
    // when an answer button is selected, all answers are disabled and time penalty/addition is finalized
    Array.from(answerBtns.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

// moves question and answers to next question
function nextQuestion() {
    questionIndex++;
    if (questionIndex < questions.length) {
        setQuestion();
    } else {
        showFinal();
    }
}
//Takes away old question and answers before allowing new items to appear
function resetAll() {
    nextBtn.style.display = "none";
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
};
//When all questions are done, displays final score, initials and a retry button.
var retry = document.getElementById("retryBtn");
function showFinal() {
    resetAll();
    var initials = prompt("Enter Initials To Save Progress")
    questionEl.innerHTML = `${initials}: ${timeLeft}`;
    retry.setAttribute("style", "display: block");
    retry.addEventListener("click", startQuiz);
    timeLeft = 0;
}


nextBtn.addEventListener("click", nextQuestion);
//Starts the questions and timer
var startEl = document.getElementById("start-btn");

function startQuiz() {
    questionIndex = 0;
    timeLeft = 180;
    startEl.setAttribute("style", "display:none");
    retry.setAttribute("style", "display: none")
    setTime();
    setQuestion();
}

startEl.addEventListener("click", startQuiz);

//function to make timer countdown
var timerEl = document.getElementById("timer");



function setTime() {
    timerEl.setAttribute("style", "display: content");

    var timerInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time Remaining: " + timeLeft ;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerEl.textContent = "Time Remaining: 0";
        }
    }, 1000);

}