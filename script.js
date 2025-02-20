// Simple JavaScript Guessing Game

const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  const message = document.getElementById('message');

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
  } else if (guess > randomNumber + 10) {
    message.textContent = 'Too high! Try again.';
  } else if (guess < randomNumber - 10) {
    message.textContent = 'Too low! Try again.';
  } else if (guess > randomNumber) {
    message.textContent = 'Close, but bit high!';
  } else if (guess < randomNumber) {
    message.textContent = 'Close, but bit low!';
  } else {
    message.textContent = 'Congratulations! You guessed it right!';
  }
}