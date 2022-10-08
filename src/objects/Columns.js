const Columns = () => {

  let _ABCD = Array.from(Array(26).keys())
      .map(key => (key + 10)
      .toString(36)
      .toUpperCase())

      _ABCD.unshift("") // columns start one over --> __|A|B|C|D
    
  let columns = document.createElement("tr")
      columns.classList = ['columns']

      _ABCD.forEach(letter => {
       let column = document.createElement("th")
           column.innerHTML = letter
           columns.appendChild(column)
  })
    return columns
}
  
export default Columns
