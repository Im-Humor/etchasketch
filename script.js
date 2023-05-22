let sqrContainer = document.querySelector(".sqr-container");

for(x = 0; x < 16; x++) {
    let sqrRow = document.createElement("div");
    sqrRow.classList.add("sqr-row");
    sqrRow.style.display = 'flex';
    sqrRow.style.flex = '1';
    sqrContainer.appendChild(sqrRow);
    for(y = 0; y < 16; y++) {
        let square = document.createElement("div");
        square.classList.add("square");
        let sqrStyle = square.style
        sqrStyle.backgroundColor = 'lightgrey';
        sqrStyle.border = 'solid';
        sqrStyle.flex = '1';
        sqrRow.appendChild(square);
    }
}

//create eventlisteners for hover to toggle background color change
//will i need to also create an event listener for stopping hovering?