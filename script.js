const quizData = [
  {
    question: "Which is the tallest mountain in the world?",
    a: "Mount Kilimanjaro",
    b: "Mount Everest",
    c: "K2",
    d: "Mount Fuji",
    correct: "b",
  },
  {
    question: "Which is the largest continent by area?",
    a: "Africa",
    b: "Europe",
    c: "Asia",
    d: "North America",
    correct: "c",
  },
  {
    question: "Which is the largest ocean on Earth?",
    a: "Atlantic Ocean",
    b: "Indian Ocean",
    c: "Arctic Ocean",
    d: "Pacific Ocean",
    correct: "d",
  },
  {
    question: "Which planet is closest to the Sun?",
    a: "Mercury",
    b: "Venus",
    c: "Mars",
    d: "Earth",
    correct: "a",
  },
  {
    question: "Who painted the Mona Lisa?",
    a: "Vincent van Gogh",
    b: "Pablo Picasso",
    c: " Claude Monet",
    d: "Leonardo da Vinci",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");

const questionEl = document.getElementById("question");

const answerEls = document.querySelectorAll(".answer");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

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

function isSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answerEl.checked = false;
    }
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = isSelected();
  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    if (answer) {
      currentQuiz++;

      if (answer) {
        if (currentQuiz < quizData.length) {
          loadQuiz();
        } else {
          quiz.innerHTML = `
              <h2>You scored ${score}/${quizData.length}.</h2>

              <button onclick="location.reload()">Reload</button>
            `;
        }
      }
    }
  }
});
