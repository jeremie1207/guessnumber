'use strict';

let highScore = document.querySelector('.highscore');

let range = 20;
let guessNumber = Math.floor(Math.random() * range) + 1;

const easy = document.querySelector('.easy');
easy.addEventListener('click', () => {
  range = 20;
  document.querySelector('.between').textContent = `(Between 1 and ${range})`;
  guessNumber = Math.floor(Math.random() * range) + 1;
});

const medium = document.querySelector('.medium');
medium.addEventListener('click', () => {
  range = 50;
  document.querySelector('.between').textContent = `(Between 1 and ${range})`;
  guessNumber = Math.floor(Math.random() * range) + 1;
});

const hard = document.querySelector('.hard');
hard.addEventListener('click', () => {
  range = 100;
  document.querySelector('.between').textContent = `(Between 1 and ${range})`;
  guessNumber = Math.floor(Math.random() * range) + 1;
});

let displayGuessNumber = document.querySelector('.number');

let userInput = document.querySelector('.guess');
let message = document.querySelector('.message');
let score = document.querySelector('.score');

const checkButton = document.querySelector('.check');

const againButton = document.querySelector('.again');
againButton.addEventListener('click', () => {
  message.textContent = 'Start guessing...';
  userInput.value = '';
  displayGuessNumber.textContent = '?';
  score.textContent = '20';
  guessNumber = Math.floor(Math.random() * range) + 1;
  document.querySelector('body').style.backgroundColor = ' #222';
  displayGuessNumber.style.width = '15rem';
  displayGuessNumber.style.color = '#222';
});

checkButton.addEventListener('click', () => {
  if (userInput.value) {
    if (userInput.value == guessNumber) {
      message.textContent = 'Correct number !';
      displayGuessNumber.textContent = userInput.value;

      document.querySelector('body').style.backgroundColor = '#60b347';
      displayGuessNumber.style.width = '30rem';
      displayGuessNumber.style.color = '#60b347';

      if (score.textContent > highScore.textContent) {
        highScore.textContent = score.textContent;
      }
    } else {
      if (score.textContent > 1) {
        score.textContent = Number(score.textContent) - 1;
        if (userInput.value > guessNumber) {
          message.textContent = 'Too high !';
        } else {
          message.textContent = 'Too low !';
        }
      } else {
        message.textContent = 'You lost the game!';
        score.textContent = 0;
      }
    }
  } else {
    message.textContent = 'No number!';
  }
});
