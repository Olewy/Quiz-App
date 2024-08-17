let questions = [
  {
    id: 1,
    question: "Was ist die Hauptstadt von Deutschland?",
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
    question: "Was ist die Hauptstadt von Frankreich?",
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
    question: "Wer hat die Monalisa gemalt?",
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
    answerDiv.id = answer.id;
    answerDiv.setAttribute("onclick", `validate('${answer.id}')`);
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

function validate(answerId) {
  const correctAnswer = currentQuestion.answers.find((answer) => {
    return answer.correct;
  });

  if (correctAnswer.id === answerId) {
    alert("Correct!");
    document.getElementById(answerId).classList.add("correct");
  } else {
    alert("Incorrect!");
    document.getElementById(answerId).classList.add("incorrect");
    document.getElementById(correctAnswer.id).classList.add("correct");
  }
}

function showSolution() {
  const correctAnswer = currentQuestion.answers.find((answer) => {
    return answer.correct;
  });
  document.getElementById(correctAnswer.id).classList.add("correct");
}

function shuffleAnswers() {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers];
  }
}
