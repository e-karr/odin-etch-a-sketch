let gridContainer = document.querySelector('.grid-container');
let resetButton = document.querySelector('.reset');

for (let i = 0; i < 25; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.setAttribute('style', 'display: flex');
    for (let j = 0; j < 25; j++) {
        let block = document.createElement('div');
        block.setAttribute('style', 'border: 1px solid grey;');
        block.style.height = ((gridContainer.clientHeight / 25) - 2) + "px";
        block.style.width = ((gridContainer.clientWidth / 25) - 2) + "px";
        block.classList.add('block');
        rowDiv.appendChild(block);
    }
    gridContainer.appendChild(rowDiv);
}

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