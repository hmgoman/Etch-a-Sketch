
let grid = document.getElementById("grid");

let num = prompt("Number of squares per side?");
if (isNaN(num) || num < 1 || num > 100) {
    prompt("Please choose a number between 1-100");
        if (isNaN(num) || num < 1 || num > 100) {
            prompt("Please choose a number between 1-100 or one will be chosen for you")
                if (isNaN(num) || num < 1 || num > 100) {
                    num = Math.floor(Math.random()*101);
                }
        }
}

let gridSize = document.getElementById("grid-size");
gridSize.addEventListener("click", () => location.reload());

let ncell = Math.pow(num, 2);

grid.style.setProperty("--num", num);

for (let i = 0; i < ncell; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        grid.appendChild(cell);
}

let cell = document.querySelectorAll("div.cell");

let changeColor = (e) => {
    e.target.classList.add("blackCell");
}

 cell.forEach(cell => {
    cell.addEventListener("mouseover", changeColor);
 })

function clear() {
    cell.forEach(cell => {
        cell.classList.remove("blackCell");
    })
}

function lines() {
    cell.forEach(cell => {
        cell.classList.toggle("lines");
    })
}

let gridLines = document.getElementById("grid-lines");
gridLines.addEventListener("click", lines);

let clearGrid = document.getElementById("clear-grid");
clearGrid.addEventListener("click", clear);
