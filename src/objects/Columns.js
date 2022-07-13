const Columns = () => {

  let alphabet  = Array.from(Array(26).keys())
                  .map(key => (key + 10)
                  .toString(36)
                  .toUpperCase())
                  alphabet.unshift("") // columns start one over --> __|A|B|C
    
  let columns = document  .createElement("tr")
      columns .classList  = ['cols']

  alphabet.forEach(letter => {
       let column = document.createElement("th")
           column.innerHTML = letter
           columns.appendChild(column)
  })
    return columns
}
  
export 
default 
Columns