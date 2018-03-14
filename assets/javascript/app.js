'use strict';

//variables

let answered = false;
let seconds = 29;

//functions

//timer function
const time = function() {
    if (!answered && seconds >= 0) {
        setTimeout(function(){
            $('#timer').text(seconds);
            seconds -= 1;
            time();
        }, 1000);
    };
};

//write question function
const nextQuestion = function() {
    $('#question').text('');
    $('#timerLocation').append('Seconds remaining: <span id="timer">30</span>');
    $('#answers').append('');
    time();
};

//record and respond to answer function



//reset function



//function calls
$('#start').click(function() {
    $('#question').empty();
    nextQuestion();    
});

