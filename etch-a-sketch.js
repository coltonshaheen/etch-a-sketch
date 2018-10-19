const GRIDSIZE = 800;

let grid = document.getElementById('container');
let colInput = document.getElementById('col-input');
colInput.addEventListener('input', calculateSize, false);

window.onload = calculateSize(8);

function calculateSize() {
    let boxes = colInput.value;
    boxes *= boxes;
    makeGrid(boxes);
}

function resetGrid() {
    let resetDivs = document.getElementsByClassName('.grid-item');
    resetDivs.classList.remove('active');
}

function makeGrid(numberOfBoxes) {
    let boxCounter = 0;
    let boxDimension = Math.sqrt(numberOfBoxes);
    console.log("boxDimension=" + boxDimension);
    let gridItemSize = GRIDSIZE / boxDimension;
    console.log("gridItemSize= " + gridItemSize);
    grid.style.gridTemplateRows = "repeat(" + boxDimension + ", " + gridItemSize + "px)";
    grid.style.gridTemplateColumns = "repeat(" + boxDimension + ", " + gridItemSize + "px)";

    while (boxCounter < numberOfBoxes) {
        let gridItem = document.createElement('div');

        gridItem.classList.add('grid-item');

        gridItem.style.width = gridItemSize;
        console.log("gridItem.style.width= " + gridItemSize);
        gridItem.style.height = gridItemSize;
        console.log("gridItem.style.height= " + gridItemSize);

        grid.appendChild(gridItem);

        gridItem.addEventListener('mouseenter', function (e) {
            let cell = e.target;
            changeColor(cell);
        }, false);

        boxCounter++;
    }
    resetGrid();
}

let changeColor = (cell) => {
    cell.classList = "grid-item active";
};