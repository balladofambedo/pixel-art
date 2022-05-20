// Select color input
// Select size input
let gridBody = {
  height: 0,
  width: 0,
  color: document.getElementById("colorPicker")
}

// When size is submitted by the user, call makeGrid()
const gridCreate = document.getElementById("sizePicker");

gridCreate.addEventListener('submit', (event) => {                  // Thank you, based MDN, for the addEventListener.
    gridBody.height = document.getElementById("inputHeight").value;
    gridBody.width = document.getElementById("inputWidth").value;

    makeGrid();

    console.log(`The current height is ${gridBody.height} and width is ${gridBody.width}.`);

    event.preventDefault();
});


function makeGrid(x = gridBody.height, y = gridBody.width) {
  const udaCanvas = document.getElementById("pixelCanvas");
  udaCanvas.innerHTML = "";

  for(i = 1; i <= x; i++){
    const row = document.createElement("tr");
    udaCanvas.appendChild(row);                              // Referenced MDN again for appendChild because NOTHING was working.
    
    for(j = 1; j <= y; j++){
      const cell = document.createElement("td");
      row.appendChild(cell);

      cell.addEventListener("click", ()=>{
        cell.style.backgroundColor = gridBody.color.value;
      });
    }
  }
}
