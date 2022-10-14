"use strict";
const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++) {
    //create element
    const cells = document.createElement("div");
    //modify element
   
    cells.classList.add("cell");
    // cells.classList.add(i);
    

    cells.style.backgroundColor = "gray";
    //
    //get element to be on html(append)
    gridContainer.append(cells);
    console.log(cells);
}

const cellArray = document.querySelectorAll(".cell");
console.log(cellArray);
const randomizer = () => {
   return  Math.floor(Math.random() * 17)
};

cellArray[randomizer()].classList.add("it");

// const endGame = () => {

// }

const gameControls = (e) => {
    if (e.target.classList.contains("it")) {
        e.target.style.backgroundColor = "red";
        cellArray.forEach((item) => {
            if (item.classList.contains("clicked")) {
                item.style.backgroundColor = "yellow";
            }
        });
        gridContainer.removeEventListener("click", gameControls);
    } else if (e.target.classList.contains("cell")) {
        e.target.classList.add("clicked");
        e.target.style.backgroundColor = "green";
    }  

}
gridContainer.addEventListener("click", gameControls);
''