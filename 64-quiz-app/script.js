class Quiz {
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionsIndex(){
        return this.questions[this.questionIndex]
    }
    guess(answer) {
        if(this.getQuestionsIndex().isCorrectAnswer(answer)){
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded(){
        return this.questionIndex === this.questions.length;
    }
}

// ======== Question class ===========

class Questions {
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer
    }

    isCorrectAnswer(choices) {
        return this.answer === choices
    }
}

// ======== display question ====

function displayQuestions(){
    if(quiz.isEnded){
        showScores()
    }else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionsIndex().text;

        //=========show option ==========
        let choices = quiz.getQuestionsIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i]
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

//======= Guess function ===========
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        displayQuestions()
    }
}

//========= show quiz progress 

function showProgress(){
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`
}

// show score 
function showScores() {
    let quizEndHtml = `
    <h1> Quiz Completed</h1>
    <h2 id="score"> You Scored: ${quiz.score} of ${quiz.questions.length}<h2>
    <div class="quiz-repeat">
        <a herf="index.html"> Take Quiz Again</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHtml;
}


//======= creat quiz question

let question = [
    new Questions(
        "Hyper Text Markup Language Stand for?", ["jQuary", "XHTML", "CSS", "HTML"], "HTML"
    ),
    new Questions(
        "Which is a JavaScript Framework?", ["React", "Laravel", "Python", "Scss"], "React"
    ),
    new Questions(
        "Which is a Backend Language", ["PHP", "HTML", "Reaxt", "All"], "PHP"
    ),
];

let quiz = new Quiz(question);

// display quistion

displayQuestions();