// const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
const choices = ['rock', 'paper', 'scissors'];

const computerPlay = () => {
  return choices[Math.floor(Math.random() * 3)];
};

const findRoundResults = (playerSelection, computerSelection) => {
  player = playerSelection.toLowerCase();
  computer = computerSelection.toLowerCase();
  if (player === computer) {
    return `It's a tie. You both chose ${player}`;
  } else if (player === 'rock') {
    if (computer === 'paper') {
      return 'You lose! Paper beats rock';
    } else {
      return 'You win! Rock beats scissors';
    }
  } else if (player === 'paper') {
    if (computer === 'scissors') {
      return 'You lose! Scissors beats paper';
    } else {
      return 'You win! Paper beats rock';
    }
  } else if (player === 'scissors') {
    if (computer === 'rock') {
      return 'You lose! Rock beats scissors';
    } else {
      return 'You win! Scissors beats paper';
    }
  }
};

const playRound = (roundNumber) => {
  alert(`Round ${roundNumber}`);

  let playerChoice = prompt('Rock, paper, or scissors?');

  while (!choices.includes(playerChoice.toLowerCase())) {
    alert('Invalid input. Try again.');
    playerChoice = prompt('Rock, paper, or scissors?');
  }

  const computerChoice = computerPlay();
  alert(`Computer chose ${computerChoice}`);

  const result = findRoundResults(playerChoice, computerChoice);
  alert(result);
};

const playGame = (numberOfRounds) => {
  for (let i = 1; i <= numberOfRounds; i++) {
    playRound(i);
  }
  alert('The game has ended. Thank you for playing!');
};

playGame(3);
