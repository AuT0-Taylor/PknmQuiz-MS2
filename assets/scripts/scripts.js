/*Declaring Variables*/
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

const Correct_Point = 10;
const Max_Question = 3;

/* questions */
let questions = [
    {
        question: "whats effective against water?",
        choice1: "grass",
        choice2: "fire",
        choice3: "steel",
        choice4: "bug",
        answer: 1,
    },
    {
        question: "What type is effective against ground?",
        choice1: "electric",
        choice2: "steel",
        choice3: "fairy",
        choice4: "water",
        answer: 4,
    },
    {
        question: "What type is super effective against dragon?",
        choice1: "dragon",
        choice2: "flying",
        choice3: "fairy",
        choice4: "poison",
        answer: 3,
    },
];

/*Functions*/

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    /*finished quiz goes to end html*/
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( (choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    } );

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach( (choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    } );
} );

startGame();