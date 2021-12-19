const container = document.getElementById("container");
const title = document.querySelector("h1");
let color = "#000000";

function chooseColor(inputColor) {
    color = inputColor;
}

function returnColor() {
    if (color == "rainbow") {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
    } else if (color == "eraser") {
        return "#ffffff";
    } else {
        return "#000000";
    }
    
}

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item"
    };
};

function drawGrid() {
    let gridItems = document.querySelectorAll(".grid-item")

    gridItems.forEach((gridItem) => {
        gridItem.addEventListener("mouseover", () => {
            gridItem.style.backgroundColor = returnColor();
        });
    });
    console.log(returnColor());
}

function reset() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let rowsInput = 0;
    let colsInput = 0;

    do {
        rowsInput = parseInt(prompt("Please enter how many rows you want (must be between 1-100)"));
    } while (Number.isInteger(rowsInput) == false || (rowsInput > 100) || (rowsInput < 1));

    do {
        colsInput = parseInt(prompt("Please enter how many columns you want (must be between 1-100)"));
    } while (Number.isInteger(colsInput) == false || (colsInput > 100) || (colsInput < 1));

    createGrid(rowsInput, colsInput);
    drawGrid();
}

createGrid(16, 16);
drawGrid();