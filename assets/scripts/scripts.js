/*Declaring Variables*/
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText =  document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

/* questions */
let questions = [
    {
        question: "whats type is effective against water?",
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
    {
        question: "Which Pokémon type is immune to Electric-type moves?",
        choice1: "Ground",
        choice2: "Rock",
        choice3: "Steel",
        choice4: "Water",
        answer:1,
    },
    {
        question: "What type combination has the least amount of weaknesses?",
        choice1: "Electric/Steel",
        choice2: "Ghost/Dark",
        choice3: "Dragon/Fairy",
        choice4: "Water/Ground",
        answer: 2,
    },
    {
        question: "Which of the following Pokémon types has never been the primary type of a Legendary Pokémon?",
        choice1: "Normal",
        choice2: "Bug",
        choice3: "Poison",
        choice4: "Fairy",
        answer: 2,
    },
    {
        question: "Which of these Pokémon types resists both Fire and Water moves?",
        choice1: "Rock",
        choice2: "Dragon",
        choice3: "Ground",
        choice4: "Steel",
        answer: 2,
    },
    {
        question: "What is the only Pokémon type that has no weaknesses when combined with the Electric type?",
        choice1: "Fairy",
        choice2: "Dragon",
        choice3: "Normal",
        choice4: "Ghost",
        answer: 4,
    },
    {
        question: "Which Pokémon type has the most resistances?",
        choice1: "Steel",
        choice2: "Fire",
        choice3: "Water",
        choice4: "Rock",
        answer: 1,
    },
    {
        question: "What is the only type that has not been paired with Fire as a dual type?",
        choice1: "Bug",
        choice2: "Fairy",
        choice3: "Ghost",
        choice4: "Ice",
        answer: 2,
    }
];

//scoring Constants
const CORRECT_BONUS = 5;
const MAX_QUESTIONS = 10;

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
        return window.location.assign('/end.html'); //end of quiz
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //dynamic progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;


    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    } );

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};


/* answer checker and indicator*/
choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = 
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        console.log(classToApply);

        if (classToApply =="correct"){
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
        }, 1000 );
    } );
} );

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};


startGame();