document.addEventListener("DOMContentLoaded", addFooterButtons);
document.addEventListener("DOMContentLoaded", removeShowSolutionButton);

let questions = [
  {
    id: 1,
    question: "What is the capital of Germany?",
    answers: [
      {
        id: "a",
        text: "München",
        correct: false,
      },
      {
        id: "b",
        text: "Hamburg",
        correct: false,
      },
      {
        id: "c",
        text: "Berlin",
        correct: true,
      },
      {
        id: "d",
        text: "Hannover",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "What is the capital of France?",
    answers: [
      {
        id: "a",
        text: "Lyon",
        correct: false,
      },
      {
        id: "b",
        text: "Paris",
        correct: true,
      },
      {
        id: "c",
        text: "Marseille",
        correct: false,
      },
      {
        id: "d",
        text: "Straßburg",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Who painted the Mona Lisa?",
    answers: [
      {
        id: "a",
        text: "Leonardo da Vinci",
        correct: true,
      },
      {
        id: "b",
        text: "Vincent Van Gogh",
        correct: false,
      },
      {
        id: "c",
        text: "Pablo Picasso",
        correct: false,
      },
      {
        id: "d",
        text: "Michelangelo",
        correct: false,
      },
    ],
  },
];

let currentQuestion;
let currentQuestionPointer = -1;

const showSolutionButton = document.getElementById("showSolutionButton");
showSolutionButton.addEventListener("click", showSolution);

const nextQuestionButton = document.getElementById("nextQuestionButton");
nextQuestionButton.addEventListener("click", nextQuestion);

function renderQuestion(question) {
  const welcomeText = document.getElementById("welcomeText").innerHTML;
  const subtitle = document.getElementById("subtitle").innerHTML;
  if (
    welcomeText === "Welcome to the Quiz!" &&
    subtitle === "Press Next to start the Quiz"
  ) {
    document.getElementById("welcomeText").innerHTML = "";
    document.getElementById("subtitle").innerHTML = "";
  }

  document.getElementById("subtitle").innerHTML = "";
  const questionDiv = document.createElement("div");
  questionDiv.id = question.id;
  questionDiv.classList.add("question");

  const questionTitle = document.createElement("h1");
  questionTitle.classList.add("question-title");

  const questionTitleText = document.createTextNode(question.question);

  const questionAnswers = document.createElement("div");
  questionAnswers.classList.add("question-answers");

  const answersCopy = [];
  question.answers.forEach((answer) => {
    answersCopy.push(answer);
  });

  while (answersCopy.length > 0) {
    const randomPointer = Math.floor(Math.random() * answersCopy.length);

    const answer = answersCopy.splice(randomPointer, 1)[0];

    const answerDiv = document.createElement("button");
    answerDiv.id = answer.id;
    answerDiv.setAttribute("onclick", `validate('${answer.id}')`);
    answerDiv.classList.add("answer");
    answerDiv.append(document.createTextNode(answer.text));
    questionAnswers.append(answerDiv);
  }

  questionDiv.append(questionTitle);
  questionTitle.append(questionTitleText);

  questionDiv.append(questionAnswers);

  const displayQuestion = document.getElementById("display-question");
  displayQuestion.append(questionDiv);
}

function nextQuestion() {
  if (currentQuestion) {
    document.getElementById(String(currentQuestion.id)).remove();
  }

  if (currentQuestionPointer + 1 < questions.length) {
    currentQuestionPointer++;
    currentQuestion = questions[currentQuestionPointer];
    renderQuestion(currentQuestion);
    addFooterButtons();

    const welcomeText = document.getElementById("welcomeText").innerHTML;
    if (welcomeText === "") {
      document.getElementById("welcomeText").remove();
    }

    // document.getElementById("subtitle").remove();
    // console.log(welcomeText);
  } else if (currentQuestionPointer === questions.length - 1) {
    document.getElementById("welcomeText").innerHTML =
      "Congrats, you finished the Quiz!";
    enableAnswerButtons();
    const repeatQuizButton = document.createElement("a");
    repeatQuizButton.classList.add("repeatQuizButton");
    const repeatQuizButtonText = document.createTextNode(
      "Press to repeat the Quiz!"
    );
    repeatQuizButton.setAttribute("href", "index.html");

    repeatQuizButton.append(repeatQuizButtonText);

    const displayQuestion = document.getElementById("display-question");
    displayQuestion.append(repeatQuizButton);

    removeFooterButtons();

    document.getElementById("welcomeText").add();
  }
}

function repeatQuiz() {
  if (currentQuestionPointer === questions.length) {
    document.getElementById("welcomeText").innerHTML = "Press Next!";
    document.getElementById("subtitle").innerHTML = "";
    currentQuestionPointer = -1;
    currentQuestion = questions[currentQuestionPointer];
  }
  enableAnswerButtons();
}

function validate(answerId) {
  const correctAnswer = currentQuestion.answers.find((answer) => {
    return answer.correct;
  });

  if (correctAnswer.id === answerId) {
    document.getElementById(correctAnswer.id).classList.add("correct");
  } else {
    document.getElementById(answerId).classList.add("incorrect");
    document.getElementById(correctAnswer.id).classList.add("correct");
  }

  disableAnswerButtons();
}

function showSolution() {
  const correctAnswer = currentQuestion.answers.find((answer) => {
    return answer.correct;
  });
  document.getElementById(correctAnswer.id).classList.add("correct");
  disableAnswerButtons();
}

function disableAnswerButtons() {
  const answerButtons = document.querySelectorAll(".answer");
  answerButtons.forEach((button) => {
    button.disabled = true;
    button.classList.add("disabled");
  });
}

function enableAnswerButtons() {
  const answerButtons = document.querySelectorAll(".answer");
  answerButtons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("disabled");
  });
}

function removeFooterButtons() {
  document
    .getElementById("showSolutionButton")
    .classList.add("removeFooterButtons");

  document
    .getElementById("nextQuestionButton")
    .classList.add("removeFooterButtons");
}

function removeShowSolutionButton() {
  document
    .getElementById("showSolutionButton")
    .classList.add("removeFooterButtons");
}

function addFooterButtons() {
  document
    .getElementById("showSolutionButton")
    .classList.remove("removeFooterButtons");

  document
    .getElementById("nextQuestionButton")
    .classList.remove("removeFooterButtons");
}
