const quizData = [
  {
    question: "What instrument does Bocchi play?",
    a: "Drums",
    b: "Bass",
    c: "Guitar",
    d: "Trumpet",
    correct: "c",
  },
  {
    question: "What does Ryo often forget to bring?",
    a: "Her bass",
    b: "Money",
    c: "Her phone",
    d: "Glasses",
    correct: "b",
  },
  {
    question: "Why does Bocchi always wear a tracksuit at home?",
    a: "She never leaves her room, so why bother?",
    b: "It's comfy",
    c: "She thinks it looks cool",
    d: "It's a family tradition",
    correct: "a",
  },
  {
    question: "Why does Nijika want to make her band famous?",
    a: "She loves money",
    b: "She wants to quit school",
    c: "Share joy through music.",
    d: "She wants to impress her sister",
    correct: "c",
  },
  {
    question: "How does Kita usually enter the room?",
    a: "Running in with excitement",
    b: "Calmly sitting down",
    c: "Walking like a thug",
    d: "Singing loudly",
    correct: "a",
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
