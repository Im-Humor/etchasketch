let sqrContainer = document.querySelector(".sqr-container");

let gridPrompt = parseInt(prompt("What size grid?"), 10);

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