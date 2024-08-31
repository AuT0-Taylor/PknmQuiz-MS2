/*Declaring Variables*/
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

const Correct_Point = 5;
const Max_Question = 5;

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
        question: "?",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: 1,
    },
    {
        question: "?",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: 1,
    },
];

/*Functions*/

