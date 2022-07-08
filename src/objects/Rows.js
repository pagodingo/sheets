import Cell from "./Cell"

const Rows = () => {
    let length  = 27
    let row     = document.createElement("tr")
    
    for (let l  = length;  --l;) 
    {
        row.appendChild(Cell())
    }
return  row
}

export 
default 
Rows