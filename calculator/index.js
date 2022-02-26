const resetButton = document.querySelector('.reset');
const negativeButton = document.querySelector('.negative');
const percentButton = document.querySelector('.percent');
const divideButton = document.querySelector('.divide');
const sevenButton = document.querySelector('.seven');
const eightButton = document.querySelector('.eight');
const nineButton = document.querySelector('.nine');
const multiplyButton = document.querySelector('.multiply');
const fourButton = document.querySelector('.four');
const fiveButton = document.querySelector('.five');
const sixButton = document.querySelector('.six');
const subtractButton = document.querySelector('.subtract');
const oneButton = document.querySelector('.one');
const twoButton = document.querySelector('.two');
const threeButton = document.querySelector('.three');
const addButton = document.querySelector('.add');
const zeroButton = document.querySelector('.zero');
const decimalButton = document.querySelector('.decimal');
const equalsButton = document.querySelector('.equals');
const displayContainer = document.querySelector('.display-container');

let useOperation = null;
let numOne = null;
let numTwo = null;
let resetDisplay = true;

resetButton.addEventListener('click', () => {
  displayContainer.textContent = 0;
  useOperation = null;
  numOne = null;
  numTwo = null;
  resetDisplay = true;
});

const numButtons = [
  zeroButton,
  oneButton,
  twoButton,
  threeButton,
  fourButton,
  fiveButton,
  sixButton,
  sevenButton,
  eightButton,
  nineButton,
];

numButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (displayContainer.textContent === '0' || resetDisplay) {
      displayContainer.textContent = index;
    } else {
      displayContainer.textContent += index;
    }
    resetDisplay = false;
  });
});

const operations = [
  { button: addButton, function: add },
  { button: subtractButton, function: subtract },
  { button: multiplyButton, function: multiply },
  { button: divideButton, function: divide },
];

operations.forEach((operation) => {
  operation.button.addEventListener('click', () => {
    useOperation = operation.function;
    numOne = displayContainer.textContent;
    resetDisplay = true;
  });
});

equalsButton.addEventListener('click', () => {
  numTwo = displayContainer.textContent;
  if (numOne && numTwo && useOperation) {
    displayContainer.textContent = useOperation(numOne, numTwo);
    resetDisplay = true;
    numOne = null;
    numTwo = null;
    useOperation = null;
  }
});

function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
  if (parseFloat(b) === 0) {
    return '􀁠';
  } else {
    const result = parseFloat(a) / parseFloat(b);
    if (result % 1 === 0) return result;
    return result.toFixed(2);
  }
}
