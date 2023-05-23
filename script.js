let sqrContainer = document.querySelector(".sqr-container");

let gridPrompt = 0
while (gridPrompt <= 0 || gridPrompt > 100) {
    gridPrompt = parseInt(prompt("Please enter a grid size between 1 and 100"), 10);
}


for(x = 0; x < gridPrompt; x++) {
    let sqrRow = document.createElement("div");
    sqrRow.classList.add("sqr-row");
    sqrRow.style.display = 'flex';
    sqrRow.style.flex = '1';
    sqrContainer.appendChild(sqrRow);
    for(y = 0; y < gridPrompt; y++) {
        let square = document.createElement("div");
        square.classList.add("square");
        let sqrStyle = square.style
        sqrStyle.backgroundColor = 'lightgrey';
        sqrStyle.border = 'solid';
        sqrStyle.borderWidth = "1px";
        sqrStyle.flex = '1';
        sqrRow.appendChild(square);
    }
}

const squares = document.querySelectorAll('.square');
squares.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'darkgrey';
    })
})