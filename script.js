'use strict';
/*assigning number*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.num1').value);
    if(!guess){
        document.querySelector('.message').textContent = '⛔️ No number!';
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.num1').style.backgroundColor = '#60b347';
        document.querySelector('.guess').textContent = secretNumber;
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if(guess !== secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
    document.querySelector('.again').addEventListener('click',function(){
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        score = 20;
        document.querySelector('.message').textContent = 'Start Guessing ...';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.num1').style.backgroundColor = '#222';
        document.querySelector('.score').textContent = '20';
        document.querySelector('.guess').textContent = '?';
        document.querySelector('.num1').value = '';
        highscore = 0;
    });
});

