const quizForm = document.querySelector('.quiz-form');
const submitAnsBtn = document.querySelector('#submit-answer-btn');
const outputE1 = document.querySelector('#output');

const correctAnswers = ["90°", "right angled"];

function calScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    outputE1.innerText = "Your score is " + score;
}

submitAnsBtn.addEventListener("click", calScore);