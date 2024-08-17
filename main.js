let questions = [
  {
    id: 1,
    question: "Was ist die Hauptstadt von Deutschland",
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
        id: "a",
        text: "Berlin",
        correct: false,
      },
      {
        id: "a",
        text: "Hannover",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Was ist die Hauptstadt von Frankreich",
    answers: [
      {
        id: "a",
        text: "Lyon",
        correct: false,
      },
      {
        id: "b",
        text: "Paris",
        correct: false,
      },
      {
        id: "a",
        text: "Marseille",
        correct: false,
      },
      {
        id: "a",
        text: "Straßburg",
        correct: false,
      },
    ],
  },
];

let currentQuestion;
let currentQuestionPointer = -1;

function renderQuestion(question) {
  const questionDiv = document.createElement("div");
  questionDiv.id = question.id;
  questionDiv.classList.add("question");

  const questionTitle = document.createElement("h1");
  questionTitle.classList.add("question-title");

  const questionTitleText = document.createTextNode(question.question);

  const questionAnswers = document.createElement("div");
  questionAnswers.classList.add("question-answers");

  //   Lösungsvorschlag Liam
  question.answers.forEach((answer) => {
    const answerDiv = document.createElement("button");
    answerDiv.classList.add("answer");
    answerDiv.append(document.createTextNode(answer.text));
    questionAnswers.append(answerDiv);
  });

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
  } else {
    currentQuestionPointer = 0;
    currentQuestion = questions[currentQuestionPointer];
  }
  renderQuestion(currentQuestion);
}

function saveQuestionToLocalStorage() {
  localStorage.setItem("questions"), JSON.stringify(questions);
}

function deletePreviousQuestion() {
  document.getElementById(id).remove();
  questions = questions.filter((question) => {
    return question.id !== id;
  });
}

function answerIncorrect() {
  alert("This answer is incorrect!");
}

function answerCorrect() {
  alert("This answer is correct!");
}
