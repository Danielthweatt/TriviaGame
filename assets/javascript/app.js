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
    $('#timerLocation').append('Seconds Remaining: <span id="timer">30</span>');
    for (let i = 0; i < 4; i++) {
        $(`#answer${i + 1}`).append(answers[questionAndAnswerIndex][i]);
    };
    answer = '';
    answered = false;
    seconds = 29;
    timer();
};

//record and respond to answer function
const checkAnswer = function() {
    $('#question').empty();
    $('#timerLocation').empty();
    for (let i = 0; i < 4; i++) {
        $(`#answer${i + 1}`).empty();
    };    
    if (answer === correctAnswer[questionAndAnswerIndex]) {
        $('#timerLocation').text('Correct!');
    } else if (answer !== '') {
        $('#timerLocation').text('Incorrect!');
    } else {
        $('#timerLocation').text('Out of Time!');
    };
    $('#question').text(answerComments[questionAndAnswerIndex]);
    if (questionAndAnswerIndex < 3) {
        setTimeout(function() {
            $('#question').empty();
            $('#timerLocation').empty();
            questionAndAnswerIndex += 1;
            nextQuestion();
        }, 5000);
    } else {
        reset();
    };
};


//reset function



//function calls
$('#start').click(function() {
    $('#startButton').empty();
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