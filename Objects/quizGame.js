const questions = [
  {
    category: "Fave Color",
    question: "What is my favorite color?",
    choices: ["red", "white", "blue"],
    answer: "white"
  },
  {
    category: "Fave Car",
    question: "What is my favorite car?",
    choices: ["mustang", "crown", "civic"],
    answer: "mustang"
  },
  {
    category: "Fave Food",
    question: "What is my Favorite Food?",
    choices: ["stirfry", "curry rice", "pizza"],
    answer: "curry rice"
  },
  {
    category: "Fave Sitcom",
    question: "What is my favorite sitcom?",
    choices: ["himym", "himyf", "tbbt"],
    answer: "himym"
  },
  {
    category: "Fave Anime",
    question: "What is my favorite anime?",
    choices: ["bleach", "haikyuu", "naruto"],
    answer: "naruto"
  }
]

const getRandomQuestion = (questions) => {
  const getIndex = Math.floor(Math.random() * questions.length);
  const questionIndex = questions[getIndex];
  return questionIndex;
};

const getRandomComputerChoice = (random) => {
  const choiceInd = Math.floor(Math.random() * random.length);
  return random[choiceInd]
};

const getResults = (object, choice) => {
  if (choice === object.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${object.answer}`;
  }
};

