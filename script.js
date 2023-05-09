'use strict';

const displayTexContent = (className, message) => {
  document.querySelector(`${className}`).textContent = message;
};

const generateNum = () => {
  return Math.trunc(Math.random() * 20 + 1);
};

const resetGame = score => {
  score = 20;
  displayTexContent('.score', score);
  secretNumber = generateNum();

  displayTexContent('.message', 'Probá un número...');
  document.querySelector('.number').style.width = '15rem';
  displayTexContent('.number', '?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
};

let score = 20;
let secretNumber = generateNum();
let highScore = 0;

document.querySelector('.again').addEventListener('click', () => {
  resetGame();
});

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //No ingresa un número
  if (!guess) {
    displayTexContent('.message', 'Tenés que introducir un número');

    //Adivinó el numero
  } else if (guess === secretNumber) {
    displayTexContent('.message', 'Número correcto!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayTexContent('.number', secretNumber);
    if (score > highScore) {
      highScore = score;
      displayTexContent('.highscore', highScore);
    }
    //Guess es distinto a secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayTexContent(
        '.message',
        guess > secretNumber ? 'Muy alto!' : 'Muy bajo!'
      );
      score--;
      displayTexContent('.score', score);
    } else {
      displayTexContent('.message', 'Perdiste!');
      displayTexContent('.score', 0);
    }
  }
});
