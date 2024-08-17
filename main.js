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

function renderQuestion(question) {
  document.getElementById("welcomeText").innerHTML = "";
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
  } else if (currentQuestionPointer === questions.length - 1) {
    document.getElementById("welcomeText").innerHTML =
      "Congrats, you finished the Quiz!";
    document.getElementById("subtitle").innerHTML =
      "Press repeat to restart the Quiz!";
  }
}

function repeatQuiz() {
  document.getElementById("welcomeText").innerHTML = "Press Next!";
  document.getElementById("subtitle").innerHTML = "";
  currentQuestionPointer = -1;
  currentQuestion = questions[currentQuestionPointer];
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
