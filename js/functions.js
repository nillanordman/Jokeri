
const table = document.getElementById('jokerTable');
const addRowBtn = document.getElementById('addRowBtn');
const rowCountDisplay = document.getElementById('rowCount');


let rowCount = 0;


addRowBtn.addEventListener('click', addJokerRow);


function addJokerRow() {
    
    const newRow = document.createElement('tr');
    
  
    for (let i = 0; i < 7; i++) {
        const cell = document.createElement('td');
        
       
        const randomNumber = Math.floor(Math.random() * 10);
        cell.textContent = randomNumber;
        
       
        newRow.appendChild(cell);
    }
    

    table.appendChild(newRow);
    
   
    rowCount++;
    rowCountDisplay.textContent = rowCount;
}
