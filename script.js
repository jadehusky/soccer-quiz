const questionBank = [
  {
    category: "clubs",
    difficulty: "Starter",
    question: "Which club is known as The Red Devils?",
    answers: ["Manchester United", "Liverpool", "Arsenal", "Bayern Munich"],
    correct: 0,
    fact: "Manchester United picked up the nickname in the 1960s."
  },
  {
    category: "clubs",
    difficulty: "Starter",
    question: "Which Spanish club plays home matches at Camp Nou?",
    answers: ["Atletico Madrid", "Real Betis", "FC Barcelona", "Sevilla"],
    correct: 2,
    fact: "Barcelona's famous stadium has hosted generations of elite players."
  },
  {
    category: "clubs",
    difficulty: "Pro",
    question: "Which club won the first Premier League season in 1992-93?",
    answers: ["Blackburn Rovers", "Manchester United", "Arsenal", "Leeds United"],
    correct: 1,
    fact: "United won the first Premier League title under Sir Alex Ferguson."
  },
  {
    category: "legends",
    difficulty: "Starter",
    question: "Who is often called CR7?",
    answers: ["Cristiano Ronaldo", "Carlos Rodriguez", "Cafu", "Claude Makelele"],
    correct: 0,
    fact: "The nickname mixes Cristiano Ronaldo's initials with his famous shirt number."
  },
  {
    category: "legends",
    difficulty: "Pro",
    question: "Which goalkeeper was nicknamed The Spider-Man?",
    answers: ["Manuel Neuer", "Gianluigi Buffon", "Lev Yashin", "Hugo Lloris"],
    correct: 2,
    fact: "Lev Yashin remains the only goalkeeper to win the Ballon d'Or."
  },
  {
    category: "legends",
    difficulty: "Elite",
    question: "Which country did Marta, one of football's greatest forwards, represent?",
    answers: ["Brazil", "Spain", "Canada", "France"],
    correct: 0,
    fact: "Marta became a global icon for Brazil and women's football."
  },
  {
    category: "rules",
    difficulty: "Starter",
    question: "How many players does a soccer team usually start with on the field?",
    answers: ["9", "10", "11", "12"],
    correct: 2,
    fact: "A standard team starts with 11 players, including one goalkeeper."
  },
  {
    category: "rules",
    difficulty: "Pro",
    question: "A player is offside only when they are involved in active play and are closer to goal than the ball and the second-last defender. What else must be true?",
    answers: ["They are in their own half", "They receive the ball from a teammate", "They are taking a corner", "They are the goalkeeper"],
    correct: 1,
    fact: "Offside position matters when a teammate plays or touches the ball."
  },
  {
    category: "rules",
    difficulty: "Starter",
    question: "What color card means a player is sent off?",
    answers: ["Blue", "Yellow", "Green", "Red"],
    correct: 3,
    fact: "A red card means the player leaves the match and cannot be replaced."
  },
  {
    category: "mixed",
    difficulty: "Pro",
    question: "What is a hat trick?",
    answers: ["Three goals by one player", "Three saves in a row", "Winning three trophies", "Three yellow cards"],
    correct: 0,
    fact: "A hat trick is three goals scored by the same player in one match."
  },
  {
    category: "mixed",
    difficulty: "Elite",
    question: "Which nation won the 2022 men's FIFA World Cup?",
    answers: ["France", "Argentina", "Croatia", "Morocco"],
    correct: 1,
    fact: "Argentina beat France in a dramatic final in Qatar."
  },
  {
    category: "mixed",
    difficulty: "Elite",
    question: "Which tournament is awarded to the best clubs in Europe each season?",
    answers: ["Copa America", "UEFA Champions League", "Gold Cup", "AFC Asian Cup"],
    correct: 1,
    fact: "The Champions League is Europe's top annual club competition."
  }
];

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

  state.selectedQuestions = shuffle(pool).slice(0, Math.min(10, pool.length));
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
