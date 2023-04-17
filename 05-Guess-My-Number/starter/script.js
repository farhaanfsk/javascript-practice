'use strict';

let secretNumber = Math.round(Math.random() * 20);
let highscore = 0;
var score = 20;
console.log(secretNumber);

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.round(Math.random() * 20);
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
});

const check = function () {
  console.log(score);
  const num = Number(document.querySelector('.guess').value);
  if (num === 0) {
    document.querySelector('.message').textContent = '!No number provided';
  } else if (num === secretNumber) {
    document.querySelector('.message').textContent = 'Number is Correct';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (num > secretNumber) {
    if (score >= 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
    } else {
      document.querySelector('.message').textContent = '!You lost';
    }
    document.querySelector('.score').textContent = score;
  } else if (num < secretNumber) {
    if (score >= 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
    } else {
      document.querySelector('.message').textContent = '!You lost';
    }
    document.querySelector('.score').textContent = score;
  }
};

document.querySelector('.check').addEventListener('click', check);
