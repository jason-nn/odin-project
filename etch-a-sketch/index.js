const gridContainer = document.querySelector('.grid-container');
const clearButton = document.querySelector('.clear-button');

const containerDimensions = 600;
let blocksPerSide = 100;

addBlocks();

clearButton.addEventListener('click', () => {
  blocksPerSide = prompt(
    'How many blocks would you like on each side?\n\nPlease enter a number from 10 to 100.'
  );

  while (blocksPerSide < 10 || blocksPerSide > 100) {
    blocksPerSide = prompt(
      'How many blocks would you like on each side?\n\nPlease enter a number from 10 to 100.'
    );
  }

  removeBlocks();
  addBlocks();
});

function addBlocks() {
  for (let i = 0; i < blocksPerSide; i++) {
    const row = document.createElement('div');
    row.style.width = `${containerDimensions}px`;
    row.style.height = `${containerDimensions / blocksPerSide}px`;
    row.style.display = 'flex';

    for (let i = 0; i < blocksPerSide; i++) {
      const block = document.createElement('div');
      block.style.width = `${containerDimensions / blocksPerSide}px`;
      block.style.height = `${containerDimensions / blocksPerSide}px`;

      block.addEventListener(
        'mouseover',
        () => {
          block.style.backgroundColor = 'black';
        },
        { once: true }
      );

      row.appendChild(block);
    }

    gridContainer.appendChild(row);
  }
}

function removeBlocks() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}
