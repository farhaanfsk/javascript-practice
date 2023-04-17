'use strict';

const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
const p1CurrentScore = document.querySelector('#current--0');
const p2CurrentScore = document.querySelector('#current--1');
const p1score = document.querySelector('#score--0');
const p2Score = document.querySelector('#score--1');
const newGame = document.querySelector('.btn--new');
const p1 = document.querySelector('.player--0');
const p2 = document.querySelector('.player--1');

var player = 'p1';
var playing = true;
let currentScore = 0;
let p1totalScore = 0;
let p2totalScore = 0;

function displayDice(value) {
  diceImg.src = `dice-${value}.png`;
}

function updateCurrentScore() {
  if (player === 'p1') {
    p1CurrentScore.textContent = currentScore;
  } else {
    p2CurrentScore.textContent = currentScore;
  }
}

function updatePlayerScore() {
  if (player === 'p1') {
    p1totalScore += currentScore;
    p1score.textContent = p1totalScore;
  } else {
    p2totalScore += currentScore;
    p2Score.textContent = p2totalScore;
  }
}

function switchPlayer() {
  if (player === 'p1') {
    player = 'p2';
    p2.classList.add('player--active');
    p1.classList.remove('player--active');
  } else {
    player = 'p1';
    p1.classList.add('player--active');
    p2.classList.remove('player--active');
  }
}

function calcRoleDice() {
  if (playing) {
    var num = Math.round(Math.random() * 5) + 1;
    displayDice(num);
    console.log(num);
    if (num == 1) {
      currentScore = 0;
      updateCurrentScore();
      switchPlayer();
    } else {
      currentScore += num;
      updateCurrentScore();
    }
  }
}

function holdLogic() {
  if (playing) {
    updatePlayerScore();
    if (p1totalScore >= 100) {
      p1.classList.add('player--winner');
      playing = false;
    } else if (p2totalScore >= 100) {
      p2.classList.add('player--winner');
      playing = false;
    } else {
      currentScore = 0;
      updateCurrentScore();
      switchPlayer();
    }
  }
}

rollDice.addEventListener('click', calcRoleDice);

hold.addEventListener('click', holdLogic);

newGame.addEventListener('click', function () {
  currentScore = 0;
  p1totalScore = 0;
  p2totalScore = 0;
  player = 'p1';
  playing = true;
  p1CurrentScore.textContent = currentScore;
  p2CurrentScore.textContent = currentScore;
  p1score.textContent = p1totalScore;
  p2Score.textContent = p2totalScore;
  p1.classList.remove('player--winner');
  p2.classList.remove('player--winner');
  rollDice.addEventListener('click', calcRoleDice);
  hold.addEventListener('click', holdLogic);
});
