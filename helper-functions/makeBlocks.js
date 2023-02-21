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

module.exports = makeBlocks;