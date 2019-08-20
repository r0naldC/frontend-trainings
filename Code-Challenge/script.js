(function() {
    var score = 0;

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

    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;

        this.displayQuestion = function(score) {
            console.log(`|--------------- Score: ${score} ---------------|`);
            console.log(`     ${this.question}`);
            this.answers.forEach((answer, index) => {
                console.log(`     ${index + 1}-) ${answer}`);
            });
            console.log(`|----------------------------------------|`);
        };
    }

    function selectNewQuestion(questions) {
        return questions[Math.floor(Math.random() * 3)];
    }

    function runGame(score) {
        var scoreGame = score;
        var userInput;
        do {
            var currentQuestion = selectNewQuestion(myQuestions);
            currentQuestion.displayQuestion(scoreGame);
            userInput = prompt("Enter your answer: ");
            if (userInput == currentQuestion.correctAnswer + 1) {
                scoreGame += 1;
            }
        } while (userInput != "exit");
    }

    runGame(score);
})();