
// This has all the questions with their respective answers, including true/false values
var questions = [
    {
        question: "What is the window object?",
        answers: [
            { text: "The lowest item in DOM hierarchy", correct: false },
            { text: "The DOM", correct: false },
            { text: "The screen size", correct: false },
            { text: "The browser's window", correct: true },
        ]
    },
    {
        question: "How do you traverse to the body in the DOM?",
        answers: [
            { text: "document.body", correct: true },
            { text: "body.document", correct: false },
            { text: "document.window.body", correct: false },
            { text: "window.body.document", correct: false },
        ]
    },
    {
        question: "How do you change attributes in JS?",
        answers: [
            { text: "setAttribute.example(`x`,`y`", correct: false },
            { text: "example.appendAttribute()", correct: false },
            { text: "example.setAttribute(`x`,`y`)", correct: true },
            { text: "appendAttribute.example()", correct: false },
        ]
    },
    {
        question: "How do you add something to the page in JS?",
        answers: [
            { text: "body.document.addChild(example)", correct: false },
            { text: "document.body.addChild(example)", correct: false },
            { text: "body.document.appendChild(example)", correct: false },
            { text: "document.body.appendChild(example)", correct: true },
        ]
    },
    {
        question: "What is the purpose of setInterval and clearInterval for a timer?",
        answers: [
            { text: "setInterval=stop, clearInterval=start", correct: false },
            { text: "setInterval=start, clearInterval=stop", correct: true },
            { text: "setInterval=display, clearInterval=hidden", correct: false },
            { text: "setInterval=hidden, clearInterval=display", correct: false },
        ]
    },
    {
        question: "What is the purpose of `example.addEventListener(`click`, example)`?",
        answers: [
            { text: "When you click that item, a function happens", correct: true },
            { text: "When you click that item, nothing happens", correct: false },
            { text: "When you click any item, a function happens", correct: false },
            { text: "When you click any item, nothing happens", correct: false },
        ]
    },
    {
        question: "What is the purpose of preventDefault() on a submit button?",
        answers: [
            { text: "It has no purpose", correct: false },
            { text: "It stops it from clearing items", correct: false },
            { text: "It stops all code from executing", correct: false },
            { text: "Stops page from refreshing", correct: true },
        ]
    },
    {
        question: "Why is `keydown` important",
        answers: [
            { text: "So you can tell what button is being pressed", correct: true },
            { text: "So you can see what button is not being pressed", correct: false },
            { text: "So you can tell what time is left", correct: false },
            { text: "It is not important", correct: false },
        ]
    },
    {
        question: "What does stopPropagation do?",
        answers: [
            { text: "It does not exist", correct: false },
            { text: "It stops event bubbling to child event handlers", correct: false },
            { text: "It stops event bubbling to parent event handlers", correct: true },
            { text: "It changes attributes of the child element", correct: false },
        ]
    },
    {
        question: "What makes data attributes important?",
        answers: [
            { text: "Data attributes allow you to change something once", correct: false },
            { text: "Data attributes allow you to contain constantly changing info", correct: true },
            { text: "Nothing is important about it", correct: false },
            { text: "It changes nothing about the element", correct: false },
        ]
    },
    {
        question: "What is the purpose of setItem and getItem",
        answers: [
            { text: "These are used in storing and accessing localStorage", correct: true },
            { text: "They allow you to access globalStorage", correct: false },
            { text: "They access eventListeners for you", correct: false },
            { text: "They do nothing", correct: false },
        ]
    },
    {
        question: "What is JSON.stringify()?",
        answers: [
            { text: "It has no purpose", correct: false },
            { text: "It converts JS strings to objects", correct: false },
            { text: "It makes strings appear on the page", correct: false },
            { text: "It converts JS objects to strings", correct: true },
        ]
    },
    {
        question: "What does JSON.parse() do?",
        answers: [
            { text: "It converts an h1 to an h2", correct: false },
            { text: "It converts JS objects to strings", correct: false },
            { text: "It stops all code from executing", correct: false },
            { text: "It converts JS strings to objects", correct: true },
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