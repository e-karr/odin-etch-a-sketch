let gridContainer = document.querySelector('.grid-container');
let resetButton = document.querySelector('.reset');
let gridSizeButtons = document.querySelectorAll('.grid-size');
let gridSize = 15;

createGrid(gridSize);

gridSizeButtons.forEach(button => button.addEventListener('click', () => {

    let rows = document.querySelectorAll('.row');
    for (let i = 0; i < rows.length; i++) {
        gridContainer.removeChild(rows[i]);
    }

    for (let i = 0; i < gridSizeButtons.length; i++) {
        gridSizeButtons[i].classList.remove('selected');
    }

    button.classList.add('selected');

    createGrid(button.value);
}));

function createColoring(blocks) {
    blocks.forEach(block => block.addEventListener('mouseover', changeBackground));
}

function changeBackground(e) {
    this.style.backgroundColor = "black";
}

function resetGrid(item) {
    for (let i = 0; i < item.length; i++) {
        item[i].style.backgroundColor = "white";
    }
}

function makeBlocks(size) {
    for (let i = 0; i < size; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        rowDiv.setAttribute('style', 'display: flex');
        for (let j = 0; j < size; j++) {
            let block = document.createElement('div');
            block.setAttribute('style', 'border: 1px solid grey; background-color: white');
            block.style.height = ((gridContainer.clientHeight / size) - 2) + "px";
            block.style.width = ((gridContainer.clientWidth / size) - 2) + "px";
            block.classList.add('block');
            rowDiv.appendChild(block);
        }
        gridContainer.appendChild(rowDiv);
    }
}

function createGrid(size) {
    makeBlocks(size);

    let gridBlocks = document.querySelectorAll('.block');

    createColoring(gridBlocks);

    resetButton.addEventListener('click', () => {
        resetGrid(gridBlocks);
    });
}