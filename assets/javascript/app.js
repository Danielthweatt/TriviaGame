'use strict';

//variables

const questions = ['What is your name?', 'What is your favorite color?', 
'What is the capital of Assyria?'];
let questionAndAnswerIndex = 0;
const answers = ['Joe', 'Green', 'I do not know.'];
let answered = false;
let seconds = 29;

//functions

//timer function
const timer = function() {
    if (!answered && seconds >= 0) {
        setTimeout(function(){
            $('#timer').text(seconds);
            seconds -= 1;
            timer();
        }, 1000);
    } else {
        setTimeout(function() {
            checkAnswer();
        }, 1000);  
    };
};

//write question function
const nextQuestion = function() {
    $('#question').text(questions[questionAndAnswerIndex]);
    $('#timerLocation').append('Seconds remaining: <span id="timer">30</span>');
    $('#answers').append(answers[questionAndAnswerIndex]);
    questionAndAnswerIndex += 1;
    seconds = 29;
    timer();
};

//record and respond to answer function
const checkAnswer = function() {
    $('#answers').empty();
    $('#timerLocation').empty();
};


//reset function



//function calls
$('#start').click(function() {
    $('#question').empty();
    nextQuestion();    
});

