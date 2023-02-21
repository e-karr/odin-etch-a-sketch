let gridContainer = document.querySelector('.grid-container');
let resetButton = document.querySelector('.reset');
let promptButton = document.querySelector('.grid-size');
let gridSize = 16;

createGrid(gridSize);

promptButton.addEventListener('click', () => {
    gridSize = Number(prompt("How many squares per side?"));

    while (gridSize < 1 || gridSize > 100 || !Number.isInteger(gridSize)) {
        gridSize = Number(prompt("Invalid input. Please enter a number between 1-100. How many squares per side?"));
    }

    let rows = document.querySelectorAll('.row');
    for (let i = 0; i < rows.length; i++) {
        gridContainer.removeChild(rows[i]);
    }
    createGrid(gridSize);
});

let gridBlocks = document.querySelectorAll('.block');

gridBlocks.forEach(block => block.addEventListener('mouseover', colorGrid));

resetButton.addEventListener('click', () => {
    reset(gridBlocks);
});

function colorGrid(e) {
    this.style.backgroundColor = "black";
}

function reset(item) {
    for (let i = 0; i < item.length; i++) {
        item[i].style.backgroundColor = "white";
    }
}

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        rowDiv.setAttribute('style', 'display: flex');
        for (let j = 0; j < size; j++) {
            let block = document.createElement('div');
            block.setAttribute('style', 'border: 1px solid grey;');
            block.style.height = ((gridContainer.clientHeight / size) - 2) + "px";
            block.style.width = ((gridContainer.clientWidth / size) - 2) + "px";
            block.classList.add('block');
            rowDiv.appendChild(block);
        }
        gridContainer.appendChild(rowDiv);
    }
}