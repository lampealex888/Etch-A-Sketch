const container = document.getElementById("container")

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        container.appendChild(cell).className = "grid-item"
    };
};

function drawGrid() {
    let gridItems = document.querySelectorAll(".grid-item")

    gridItems.forEach((gridItem) => {
        gridItem.addEventListener("mouseover", () => {
            gridItem.style.backgroundColor = "green";
        });
    });
}

function reset() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let rowsInput = 0;
    let colsInput = 0;

    while ((Number.isInteger(parseInt(rowsInput)) == false) || (rowsInput > 100) || (rowsInput < 1)) {
        let rowsInput = parseInt(prompt("Please enter how many rows you want (max 100)"));
        console.log(rowsInput);
        if (rowsInput > 100) {
            alert("Please enter a number less than 100")
        } else if ((Number.isInteger(parseInt(rowsInput)) == false) || (rowsInput < 1)) {
            alert("Please enter a valid number");
        }
    }
    /*
    let colsInput = prompt("Please enter how many columns you want (max 100)");
    if (colsInput.isInteger != false) {
        alert("Please enter a valid number");
        let colsInput = prompt("Please enter how many columns you want (max 100)");
    } else if (colsInput > 100) {
        alert("Please enter a number less than 100")
        let colsInput = prompt("Please enter how many columns you want (max 100)");
    }
    createGrid(rowsInput, colsInput);
    drawGrid();
    */
}

createGrid(16, 16);
drawGrid();


