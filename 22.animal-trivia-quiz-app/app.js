/* DOM */
const quizArea = document.querySelector(".quiz_area");
const start = document.querySelector(".start");
const quizs = document.querySelector(".quizs");
const question = document.querySelector(".question");
const answerChoices = document.querySelectorAll(".choices");
const choiceA = document.querySelector("#A");
const choiceB = document.querySelector("#B");
const choiceC = document.querySelector("#C");
const choiceD = document.querySelector("#D");
const counter = document.querySelector(".counter");
const timerGauge = document.querySelector(".timer_gauge");
const progress = document.querySelector(".progress");
const scoreEl = document.querySelector(".score");

// Questions ------------------------------------------
let questions = [
  {
    question: "How many different sounds can a cat make?",
    questionImg: "img/1.jpg",
    choiceA: "100",
    choiceB: "150",
    choiceC: "10",
    choiceD: "27",
    correctAnswer: "100",
  },
  {
    question: "What breed of cat has a reputation for being cross-eyed?",
    questionImg: "img/2.jpg",
    choiceA: "Himalayan",
    choiceB: "Egyptian Mau",
    choiceC: "Siamese",
    choiceD: "Persian",
    correctAnswer: "Siamese",
  },
  {
    question: "What is the most common training command taught to dogs?",
    questionImg: "img/3.jpg",
    choiceA: "Stay",
    choiceB: "Sit",
    choiceC: "Dance",
    choiceD: "Roll",
    correctAnswer: "Sit",
  },
  {
    question: "What is a dog’s most highly developed sense?",
    questionImg: "img/4.jpg",
    choiceA: "Smell",
    choiceB: "Sight",
    choiceC: "Taste",
    choiceD: "Touch",
    correctAnswer: "Smell",
  },
  {
    question: " How many known species of birds are there?",
    questionImg: "img/5.jpg",
    choiceA: "5,000",
    choiceB: "10,000",
    choiceC: "20,000",
    choiceD: "40,000",
    correctAnswer: "10,000",
  },
  {
    question: "What evolutionary adaptation helps birds fly?",
    questionImg: "img/6.jpg",
    choiceA: "Rapid Digestion",
    choiceB: "Beaks",
    choiceC: "Hollow Bones",
    choiceD: "All of These",
    correctAnswer: "All of These",
  },
  {
    question:
      "Which of the following is not one of the four remaining subspecies of elk in North America?",
    questionImg: "img/7.jpg",
    choiceA: "Manitoba Elk",
    choiceB: "Highland Elk",
    choiceC: "Rocky Mountain Elk",
    choiceD: "Tule Elk",
    correctAnswer: "Highland Elk",
  },
  {
    question: "What is a baby elk called?",
    questionImg: "img/8.jpg",
    choiceA: "Bull",
    choiceB: "Sow",
    choiceC: "Cow",
    choiceD: "Calf",
    correctAnswer: "Calf",
  },
  {
    question: "What do wolves use their scent for?",
    questionImg: "img/9.jpg",
    choiceA: "Marking Territory",
    choiceB: "Finding Prey",
    choiceC: "A Cover-up",
    choiceD: "Nothing",
    correctAnswer: "Marking Territory",
  },
  {
    question:
      "If a wolf trespasses on the territory of other wolves, what will happen?",
    questionImg: "img/10.jpg",
    choiceA: "Nothing",
    choiceB: "It will be accepted into the pack",
    choiceC: "It will be chased or killed",
    choiceD: "It will be required to present prey to the pack",
    correctAnswer: "It will be chased or killed",
  },
];

// Necessary variable ------------------------------------
const lastQuestion = questions.length - 1;
let currentQuestion = 0;
const gaugeTime = 10; // 10 second
const gaugeWidth = 100; // 80% of width
const gaugeUnit = gaugeWidth / gaugeTime;
let count = 0;
let score = 0;
let TIMER;

// Start Quiz function
function startQuiz() {
  start.style.visibility = "hidden";
  renderQuestion();
  quizs.style.visibility = "visible";
  TIMER = setInterval(renderCounter, 1000);
  // renderCounter();
  renderProgress();
}

start.addEventListener("click", startQuiz);

// All Answer choices function
answerChoices.forEach((answer) => {
  answer.addEventListener("click", (evt) => {
    let userAnswer = evt.target.innerText;

    checkAnswer(userAnswer);
  });
});

// Next Question function
function nextQuestion() {
  count = 0;

  if (currentQuestion < lastQuestion) {
    currentQuestion++;
    renderQuestion();
  } else {
    clearInterval(TIMER);
    renderScore();
  }
}

// Check Answer Function
function checkAnswer(answer) {
  if (answer === questions[currentQuestion].correctAnswer) {
    score++;
    answerIsCorrect();
  } else {
    answerIsIncorrect();
  }

  nextQuestion();
}

// Answer is correct function
function answerIsCorrect() {
  document.getElementById(currentQuestion).style.backgroundColor = "green";
}

// Answer is incorrect function
function answerIsIncorrect() {
  document.getElementById(currentQuestion).style.backgroundColor = "red";
}

// -------- Rendering function ----------
// Render Question function
function renderQuestion() {
  let q = questions[currentQuestion];

  question.innerHTML = `<p>${q.question}</p>`;
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;

  quizArea.style.backgroundImage = `url('${q.questionImg}')`;
}

// Render Counter function
function renderCounter() {
  if (count <= gaugeTime) {
    counter.innerHTML = count;
    timerGauge.style.width = count * gaugeUnit + "%";
    count++;
  } else {
    answerIsIncorrect();
    nextQuestion();
  }
}

// Render Progress bar function
function renderProgress() {
  for (let questionIndex = 0; questionIndex <= lastQuestion; questionIndex++) {
    progress.innerHTML += `<div class="progress_bar" id="${questionIndex}"></div>`;
  }
}

// Render Score function
function renderScore() {
  scoreEl.style.visibility = "visible";

  let answerPercentage = Math.floor((100 * score) / lastQuestion);

  scoreEl.innerHTML = `<h2>Correct Answer: ${score}</h2>`;
  scoreEl.innerHTML += `<h2>Answer Percentage: ${answerPercentage}%</h2>`;
}
