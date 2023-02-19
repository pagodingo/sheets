import Cell from "./Cell"

const Rows = (rowNumber) => {
    let length  = 27
    let row     = document.createElement("tr")
    
    for (let i = 0; i < length; ++i)
    {
        row.appendChild(Cell(i + 1, rowNumber + 1));
    }
return  row
}

export default Rows
