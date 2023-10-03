const computerChoice = document.querySelector('#computerChoice');
const playerChoice = document.querySelector('#playerChoice');

let playerScoreValue = 0;
let computerScoreValue = 0;
const playerScoreContainer = document.querySelector('#playerScore');
const computerScoreContainer = document.querySelector('#computerScore');

playerScoreContainer.textContent = `Player Score : ${playerScoreValue}`;
computerScoreContainer.textContent = `Computer Score : ${computerScoreValue}`;

function getComputerChoice() {
  const CHOICES = ['rock', 'paper', 'scissors'];

  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

const computerChoiceImg = document.querySelector('#computerChoiceImg');
const computerChoiceImgElement = document.createElement('img');

function displayComputerChoice() {
  computerChoice.textContent = getComputerChoice();
  computerChoiceImgElement.width = 100;
  computerChoiceImgElement.height = 100;

  while (computerChoiceImg.firstChild) {
    computerChoiceImg.removeChild(computerChoiceImg.firstChild);
  }

  if (computerChoice.textContent === 'scissors') {
    computerChoiceImgElement.src = `../assets/${computerChoice.textContent}.png`;
    computerChoiceImgElement.alt = `${computerChoice.textContent}`;

    computerChoiceImg.appendChild(computerChoiceImgElement);
  } else if (computerChoice.textContent === 'rock') {
    computerChoiceImgElement.src = `../assets/${computerChoice.textContent}.png`;
    computerChoiceImgElement.alt = `${computerChoice.textContent}`;

    computerChoiceImg.appendChild(computerChoiceImgElement);
  } else {
    computerChoiceImgElement.src = `../assets/${computerChoice.textContent}.png`;
    computerChoiceImgElement.alt = `${computerChoice.textContent}`;

    computerChoiceImg.appendChild(computerChoiceImgElement);
  }
}

const gameResult = document.querySelector('#result');

function playGame(comp, player) {
  if (comp == 'paper' && player == 'paper') {
    gameResult.textContent = `Paper vs. Paper? It's a draw! Go again!`;
  } else if (comp == 'paper' && player == 'rock') {
    computerScoreValue++;
    gameResult.textContent = `You lose! Paper beats Rock.`;
  } else if (comp == 'paper' && player == 'scissors') {
    playerScoreValue++;
    gameResult.textContent = `You win! Scissors beats Paper.`;
  } else if (comp == 'scissors' && player == 'scissors') {
    gameResult.textContent = `It's a draw! Scissors vs. Scissors, really? C'mon, once more!`;
  } else if (comp == 'scissors' && player == 'paper') {
    computerScoreValue++;
    gameResult.textContent = `You lose! Scissors beats Paper.`;
  } else if (comp == 'scissors' && player == 'rock') {
    playerScoreValue++;
    gameResult.textContent = `You win! Rock beats Scissors.`;
  } else if (comp == 'rock' && player == 'rock') {
    gameResult.textContent = `Ugh, Rock vs. Rock, it's a draw! Another round!`;
  } else if (comp == 'rock' && player == 'paper') {
    playerScoreValue++;
    gameResult.textContent = `You win! Paper beats Rock.`;
  } else if (comp == 'rock' && player == 'scissors') {
    computerScoreValue++;
    gameResult.textContent = `You lose! Rock beats Scissors.`;
  } else {
    gameResult.textContent = `Something's wrong, try again later.`;
  }

  if (gameResult.textContent.includes('win')) {
    gameResult.style.color = '#06D6A0';
  } else if (gameResult.textContent.includes('lose')) {
    gameResult.style.color = '#EF476F';
  } else if (gameResult.textContent.includes('draw')) {
    gameResult.style.color = '#FFD166';
  } else gameResult.style.color = '#1a1a1a';

  playerScoreContainer.textContent = `Player Score : ${playerScoreValue}`;
  computerScoreContainer.textContent = `Computer Score : ${computerScoreValue}`;
}

const optionRock = document.querySelector('#rock');
const optionPaper = document.querySelector('#paper');
const optionScissors = document.querySelector('#scissors');
const playerChoiceImg = document.querySelector('#playerChoiceImg');
const playerChoiceElement = document.createElement('img');
playerChoiceElement.width = 100;
playerChoiceElement.height = 100;

const modalActive = document.querySelector('#modal');
const restartBtn = document.querySelector('#restartBtn');

function restartGame() {
  modalActive.classList.remove('active');

  gameResult.textContent = 'Rock, Paper, or Scissors? What is it gonna be?';
  gameResult.style.color = '#1a1a1a';
  computerChoice.textContent = '?';
  playerChoice.textContent = '?';
  computerChoiceImg.removeChild(computerChoiceImg.firstChild);
  playerChoiceImg.removeChild(playerChoiceImg.firstChild);
  computerScoreValue = 0;
  computerScoreContainer.textContent = `Computer Score : ${computerScoreValue}`;
  playerScoreValue = 0;
  playerScoreContainer.textContent = `Player Score : ${playerScoreValue}`;
}

const modalTitle = document.querySelector('#modalTitle');

function handleClickEvent(playerSelection) {
  if (playerScoreValue === 5) {
    modalActive.classList.add('active');
    modalTitle.textContent = 'Congratulations, you win! Play again?';
    restartBtn.addEventListener('click', () => restartGame());
  } else if (computerScoreValue === 5) {
    modalActive.classList.add('active');
    modalTitle.textContent = 'Too bad, you lose! Play Again?';
    restartBtn.addEventListener('click', () => restartGame());
  }

  displayComputerChoice();
  playerChoice.textContent = playerSelection;
  playerChoiceElement.src = `../assets/${playerSelection}.png`;
  playerChoiceElement.alt = playerSelection;
  playerChoiceImg.appendChild(playerChoiceElement);
  playGame(computerChoice.textContent, playerSelection);

  if (playerScoreValue === 5) {
    modalActive.classList.add('active');
    modalTitle.textContent = 'Congratulations, you win! Play again?';
    restartBtn.addEventListener('click', () => restartGame());
  } else if (computerScoreValue === 5) {
    modalActive.classList.add('active');
    modalTitle.textContent = 'Too bad, you lose! Play Again?';
    restartBtn.addEventListener('click', () => restartGame());
  }
}

optionRock.addEventListener('click', () => handleClickEvent('rock'));
optionPaper.addEventListener('click', () => handleClickEvent('paper'));
optionScissors.addEventListener('click', () => handleClickEvent('scissors'));
