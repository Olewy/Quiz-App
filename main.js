const questions = [
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

function renderQuestion() {
  const question = questions[0];

  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");

  const questionTitle = document.createElement("h1");
  questionTitle.classList.add("question-title");

  const questionTitleText = document.createTextNode(question.question);

  const questionAnswers = document.createElement("div");
  questionAnswers.classList.add("question-answers");

  //   Lösungsvorschlag Liam
  //   question.answers.forEach((answer) => {
  //     const answerDiv = document.createElement("button");
  //     answerDiv.classList.add("answer");
  //     answerDiv.append(document.createTextNode(answer.text));
  //     questionAnswers.append(answerDiv);
  //   });

  // Lösungsvorschlag Ole
  const answer1 = document.createElement("button");
  answer1.classList.add("answer");
  const answer2 = document.createElement("button");
  answer2.classList.add("answer");
  const answer3 = document.createElement("button");
  answer3.classList.add("answer");
  const answer4 = document.createElement("button");
  answer4.classList.add("answer");

  const answerText1 = document.createTextNode(question.answers.text);
  const answerText2 = document.createTextNode("München");
  const answerText3 = document.createTextNode("Berlin");
  const answerText4 = document.createTextNode("Hannover");

  const displayQuestion = document.getElementById("display-question");

  displayQuestion.append(questionDiv);

  questionDiv.append(questionTitle);
  questionTitle.append(questionTitleText);

  questionDiv.append(questionAnswers);

  questionAnswers.append(answer1);
  questionAnswers.append(answer2);
  questionAnswers.append(answer3);
  questionAnswers.append(answer4);

  answer1.append(answerText1);
  answer2.append(answerText2);
  answer3.append(answerText3);
  answer4.append(answerText4);
}

function answerIncorrect() {
  alert("This answer is incorrect!");
}

function answerCorrect() {
  alert("This answer is correct!");
}
