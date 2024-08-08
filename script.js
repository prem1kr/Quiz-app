const quizData = [
    {
        question: "What is 2 + 2 = ?",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        correct: "b",
    },

    {
        question: "What is 10/5 = ?",
        a: "2",
        b: "4",
        c: "5",
        d: "6",
        correct: "a",
    },

    {
        question: "What is 10/2 = ?",
        a: "2",
        b: "4",
        c: "5",
        d: "6",
        correct: "c",
    },
    
    {
        question: "What is 10*2 = ?",
        a: "20",
        b: "4",
        c: "5",
        d: "6",
        correct: "a",
    },
    {
        question: "What is 10*5 = ?",
        a: "2",
        b: "4",
        c: "50",
        d: "6",
        correct: "c",
    },
    {
        question: "What is 1*2 = ?",
        a: "2",
        b: "4",
        c: "5",
        d: "6",
        correct: "a",
    },
    {
        question: "What is 12/2 = ?",
        a: "2",
        b: "4",
        c: "5",
        d: "6",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const results = document.getElementById('results');
const scoreText = document.getElementById('score');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answersEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answersEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.classList.add('hide');
            results.classList.remove('hide');
            scoreText.innerText = `${score}/${quizData.length}`;
        }
    }
});
