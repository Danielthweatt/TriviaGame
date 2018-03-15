'use strict';

//variables

const questions = ['What is your name?', 'What is your favorite color?', 
'What is the capitol of Assyria?'];
const answers = [['Joe', 'Bob', 'Jim', 'Fred'], ['Green', 'Red', 'Yellow', 'Blue'], 
['Paris', 'London', 'New York', 'I do not know.']];
const correctAnswer = [0, 2, 3];
const answerComments = ['Your name is Joe.', 'Your favorite color is yellow.', 
'You do not know what the capitol of Assyria is.'];
let questionAndAnswerIndex = 0;
let answered;
let seconds;
let answer;
let correctAnswers = 0;
let incorrectAnswers = 0;
let unanswered = 0;

//functions

//timer function
const timer = function() {
    if (!answered && seconds >= 0) {
        setTimeout(function(){
            $('#timer').text(seconds);
            seconds -= 1;
            timer();
        }, 1000);
    } else if (seconds < 0) {
        setTimeout(function() {
            checkAnswer();
        }, 1000);  
    } else {
        checkAnswer();
    };
};

//write question function
const nextQuestion = function() {
    $('#question').text(questions[questionAndAnswerIndex]);
    $('#timer-location').append('Seconds Remaining: <span id="timer">30</span>');
    for (let i = 0; i < 4; i++) {
        $(`#answer${i + 1}`).append(`<p class="possible-answer">${answers[questionAndAnswerIndex][i]}</p>`);
    };
    answer = '';
    answered = false;
    seconds = 29;
    timer();
};

//record and respond to answer function
const checkAnswer = function() {
    $('#timer-location').empty();
    $('#question').empty();
    for (let i = 0; i < 4; i++) {
        $(`#answer${i + 1}`).empty();
    };    
    if (answer === correctAnswer[questionAndAnswerIndex]) {
        correctAnswers += 1;
        $('#timer-location').text('Correct!');
    } else if (answer !== '') {
        incorrectAnswers += 1;
        $('#timer-location').text('Incorrect!');
    } else {
        unanswered += 1;
        $('#timer-location').text('Out of Time!');
    };
    $('#question').text(answerComments[questionAndAnswerIndex]);
    questionAndAnswerIndex += 1;
    if (questionAndAnswerIndex < 3) {
        setTimeout(function() {
            $('#timer-location').empty();
            $('#question').empty();
            nextQuestion();
        }, 5000);
    } else {
        setTimeout(function() {
            $('#timer-location').empty();
            $('#question').empty();
            endGame();
        }, 5000); 
    };
};

//game over function
const endGame = function() {
    $('#timer-location').text('Game Over!');
    $('#question').text('Here is how you did:');
    $('#answer1').append(`<p class="results">Correct Answers: ${correctAnswers}</p>`);
    $('#answer2').append(`<p class="results">Incorrect Answers: ${incorrectAnswers}</p>`);
    $('#answer3').append(`<p class="results">Unanswered Questions: ${unanswered}</p>`);
    $('#restart-button').append('<button id="restart" class="btn btn-default">Play Again?</button>');
    $('#restart').click(function() {
        $('#timer-location').empty();
        $('#question').empty();
        for (let i = 0; i < 3; i++) {
            $(`#answer${i + 1}`).empty();
        };
        $('#restart-button').empty();
        questionAndAnswerIndex = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        unanswered = 0;
        nextQuestion();
    }); 
};

//function calls
$('#start').click(function() {
    $('#start-button').empty();
    $('#main-section').addClass("question-container");
    nextQuestion();    
});

$('#answer1').click(function() {
    if (answer === '') {
        answer = 0;
        answered = true;
    };
});

$('#answer2').click(function() {
    if (answer === '') {
        answer = 1;
        answered = true;
    };
});

$('#answer3').click(function() {
    if (answer === '') {
        answer = 2;
        answered = true;
    };
});

$('#answer4').click(function() {
    if (answer === '') {
        answer = 3;
        answered = true;
    };
});