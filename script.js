const questionBank = window.questionBank || [];
const quizLength = 15;

const state = {
  mode: "mixed",
  current: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  selectedQuestions: []
};

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const modeButtons = document.querySelectorAll(".mode-button");
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const playAgainButton = document.getElementById("play-again-button");
const questionCount = document.getElementById("question-count");
const score = document.getElementById("score");
const streak = document.getElementById("streak");
const progressBar = document.getElementById("progress-bar");
const categoryPill = document.getElementById("category-pill");
const difficulty = document.getElementById("difficulty");
const questionText = document.getElementById("question-text");
const answers = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");
const finalScore = document.getElementById("final-score");
const bestStreak = document.getElementById("best-streak");

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    modeButtons.forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
  });
});

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", goNext);
playAgainButton.addEventListener("click", () => {
  showScreen(startScreen);
  updateStats();
});

function startQuiz() {
  const pool = state.mode === "mixed"
    ? questionBank
    : questionBank.filter((item) => item.category === state.mode);

  state.selectedQuestions = shuffle(pool).slice(0, Math.min(quizLength, pool.length));
  state.current = 0;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;

  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const item = state.selectedQuestions[state.current];
  const total = state.selectedQuestions.length;

  questionCount.textContent = `${state.current + 1} / ${total}`;
  progressBar.style.width = `${(state.current / total) * 100}%`;
  categoryPill.textContent = labelFor(item.category);
  difficulty.textContent = item.difficulty;
  questionText.textContent = item.question;
  feedback.textContent = "";
  nextButton.classList.add("hidden");
  answers.innerHTML = "";

  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = answer;
    button.addEventListener("click", () => chooseAnswer(index));
    answers.appendChild(button);
  });

  updateStats();
}

function chooseAnswer(index) {
  const item = state.selectedQuestions[state.current];
  const buttons = answers.querySelectorAll(".answer-button");
  const isCorrect = index === item.correct;

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === item.correct) {
      button.classList.add("correct");
    } else if (buttonIndex === index) {
      button.classList.add("wrong");
    }
  });

  if (isCorrect) {
    state.score += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    feedback.textContent = `Correct. ${item.fact}`;
  } else {
    state.streak = 0;
    feedback.textContent = `Not quite. ${item.fact}`;
  }

  nextButton.textContent = state.current === state.selectedQuestions.length - 1 ? "See results" : "Next question";
  nextButton.classList.remove("hidden");
  updateStats();
}

function goNext() {
  state.current += 1;

  if (state.current >= state.selectedQuestions.length) {
    showResults();
    return;
  }

  renderQuestion();
}

function showResults() {
  const total = state.selectedQuestions.length;
  const percent = Math.round((state.score / total) * 100);

  progressBar.style.width = "100%";
  finalScore.textContent = `${state.score} / ${total}`;
  bestStreak.textContent = state.bestStreak;

  if (percent >= 90) {
    resultTitle.textContent = "World-class ball knowledge";
    resultMessage.textContent = "You read the game like a captain. That was a serious performance.";
  } else if (percent >= 70) {
    resultTitle.textContent = "Starting XI material";
    resultMessage.textContent = "Strong score. A few more facts and you are bossing the midfield.";
  } else if (percent >= 45) {
    resultTitle.textContent = "Solid squad player";
    resultMessage.textContent = "You have the basics. Run it back and build that streak.";
  } else {
    resultTitle.textContent = "Training ground time";
    resultMessage.textContent = "Every legend starts somewhere. Pick a category and go again.";
  }

  showScreen(resultScreen);
}

function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach((item) => item.classList.remove("active"));
  screen.classList.add("active");
}

function updateStats() {
  score.textContent = state.score;
  streak.textContent = state.streak;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function labelFor(category) {
  return category.charAt(0).toUpperCase() + category.slice(1);
}
