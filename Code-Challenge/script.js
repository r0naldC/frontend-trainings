var score = 0;

function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;

    this.displayQuestion = function() {
        // var currentQuestion = selectNewQuestion(myQuestions);
        console.log(`|--------------- Score: ${score} ---------------|`);
        // debugger;
        console.log(`     ${this.question}`);
        this.answers.forEach((answer, index) => {
            console.log(`     ${index + 1}-) ${answer}`);
        });
        console.log(`|----------------------------------------|`);
    };
}

var myQuestions = [
    new Question(
        "Js es un lenguaje de programacion?", ["Si.", "No.", "No lo se."],
        0
    ),
    new Question(
        "Js es un lenguaje interpretado?", ["Si.", "No.", "No lo se."],
        1
    ),
    new Question("Js es un lenguaje cool?", ["Si.", "No.", "No lo se."], 0)
];

function selectNewQuestion(questions) {
    return questions[Math.floor(Math.random() * 3)];
}

function runGame() {
    // var currentQuestion = selectNewQuestion(myQuestions);
    var userInput;
    do {
        var currentQuestion = selectNewQuestion(myQuestions);
        currentQuestion.displayQuestion();
        userInput = prompt("Enter your answer: ");
        // debugger;
        if (userInput == currentQuestion.correctAnswer + 1) {
            score += 1;
        }
        // debugger;
    } while (userInput != "exit");
}

// console.log(selectNewQuestion(myQuestions));

// function displayQuestion() {
//     var currentQuestion = selectNewQuestion(myQuestions);
//     console.log(`|--------------- Score: ${score} ---------------|`);
//     console.log(`     ${currentQuestion.question}`);
//     currentQuestion.answers.forEach((answer, index) => {
//         console.log(`     ${index + 1}-) ${answer}`);
//     });
//     console.log(`|----------------------------------------|`);
// }

// console.log(selectNewQuestion(myQuestions).displayQuestion());

runGame();