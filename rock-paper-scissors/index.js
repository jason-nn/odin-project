// const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
// const choices = ['rock', 'paper', 'scissors'];

// const computerPlay = () => {
//   return choices[Math.floor(Math.random() * 3)];
// };

// const findRoundResults = (playerSelection, computerSelection) => {
//   player = playerSelection.toLowerCase();
//   computer = computerSelection.toLowerCase();
//   if (player === computer) {
//     return `It's a tie. You both chose ${player}`;
//   } else if (player === 'rock') {
//     if (computer === 'paper') {
//       return 'You lose! Paper beats rock';
//     } else {
//       return 'You win! Rock beats scissors';
//     }
//   } else if (player === 'paper') {
//     if (computer === 'scissors') {
//       return 'You lose! Scissors beats paper';
//     } else {
//       return 'You win! Paper beats rock';
//     }
//   } else if (player === 'scissors') {
//     if (computer === 'rock') {
//       return 'You lose! Rock beats scissors';
//     } else {
//       return 'You win! Scissors beats paper';
//     }
//   }
// };

// const playRound = (roundNumber) => {
//   alert(`Round ${roundNumber}`);

//   let playerChoice = prompt('Rock, paper, or scissors?');

//   while (!choices.includes(playerChoice.toLowerCase())) {
//     alert('Invalid input. Try again.');
//     playerChoice = prompt('Rock, paper, or scissors?');
//   }

//   const computerChoice = computerPlay();
//   alert(`Computer chose ${computerChoice}`);

//   const result = findRoundResults(playerChoice, computerChoice);
//   alert(result);
// };

// const playGame = (numberOfRounds) => {
//   for (let i = 1; i <= numberOfRounds; i++) {
//     playRound(i);
//   }
//   alert('The game has ended. Thank you for playing!');
// };

// playGame(3);

const computerScoreElement = document.querySelector('.computerScoreElement');
const playerScoreElement = document.querySelector('.playerScoreElement');
const startGameButton = document.querySelector('.startGameButton');
const roundNumberElement = document.querySelector('.roundNumberElement');
const playerChoiceElement = document.querySelector('.playerChoiceElement');
const computerChoiceElement = document.querySelector('.computerChoiceElement');
const resultElement = document.querySelector('.resultElement');
const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorsButton = document.querySelector('.scissorsButton');
const nextRoundButton = document.querySelector('.nextRoundButton');
const playAgainButton = document.querySelector('.playAgainButton');

const moves = ['rock', 'paper', 'scissors'];

let computerScore;
let playerScore;
let roundNumber;

reset();

computerScoreElement.textContent = `Computer: ${computerScore}`;
playerScoreElement.textContent = `Player: ${playerScore}`;
roundNumberElement.textContent = `Round ${roundNumber}`;

startGameButton.addEventListener('click', startGame);
nextRoundButton.addEventListener('click', nextRound);
playAgainButton.addEventListener('click', reset);

rockButton.addEventListener('click', () => {
  playerSelect('rock');
});

paperButton.addEventListener('click', () => {
  playerSelect('paper');
});

scissorsButton.addEventListener('click', () => {
  playerSelect('scissors');
});

function startGame() {
  startGameButton.style.display = 'none';
  roundNumberElement.style.display = 'block';
  playerChoiceElement.style.display = 'block';
  computerChoiceElement.style.display = 'block';
  resultElement.style.display = 'block';
  rockButton.style.display = 'inline';
  paperButton.style.display = 'inline';
  scissorsButton.style.display = 'inline';
}

function reset() {
  startGameButton.style.display = 'block';
  roundNumberElement.style.display = 'none';
  playerChoiceElement.style.display = 'none';
  computerChoiceElement.style.display = 'none';
  resultElement.style.display = 'none';
  rockButton.style.display = 'none';
  paperButton.style.display = 'none';
  scissorsButton.style.display = 'none';
  nextRoundButton.style.display = 'none';
  playAgainButton.style.display = 'none';
  computerScore = 0;
  playerScore = 0;
  roundNumber = 1;
  computerScoreElement.textContent = `Computer: ${computerScore}`;
  playerScoreElement.textContent = `Player: ${playerScore}`;
  roundNumberElement.textContent = `Round ${roundNumber}`;
}

function playerSelect(playerMove) {
  playerChoiceElement.textContent = `Player chose ${playerMove}`;

  const computerMove = computerSelect();

  result = determineWinner(playerMove, computerMove);
  resultElement.textContent = result;

  playerChoiceElement.style.display = 'block';
  computerChoiceElement.style.display = 'block';
  resultElement.style.display = 'block';

  rockButton.style.display = 'none';
  paperButton.style.display = 'none';
  scissorsButton.style.display = 'none';
  nextRoundButton.style.display = 'inline';

  checkScores();
}

function computerSelect() {
  const computerMove = moves[Math.floor(Math.random() * 3)];
  computerChoiceElement.textContent = `Computer chose ${computerMove}`;
  return computerMove;
}

function determineWinner(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return 'Tie';
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    playerScore += 1;
    playerScoreElement.textContent = `Player: ${playerScore}`;
    return 'Player wins';
  } else {
    computerScore += 1;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
    return 'Computer wins';
  }
}

function nextRound() {
  nextRoundButton.style.display = 'none';
  roundNumber += 1;
  roundNumberElement.textContent = `Round ${roundNumber}`;
  playerChoiceElement.style.display = 'none';
  computerChoiceElement.style.display = 'none';
  resultElement.style.display = 'none';
  rockButton.style.display = 'inline';
  paperButton.style.display = 'inline';
  scissorsButton.style.display = 'inline';
}

function checkScores() {
  if (playerScore === 5 || computerScore === 5) {
    endGame();
  }
}
function endGame() {
  roundNumberElement.textContent = `Game over`;
  nextRoundButton.style.display = 'none';
  playerChoiceElement.style.display = 'none';
  computerChoiceElement.style.display = 'none';
  playAgainButton.style.display = 'inline';
}
