const Columns = () => {

  let abc  = Array(27).keys()
  let cols = document .createElement("tr")
      cols .classList  = ['cols']

  for (let a of abc) {

       let letter = (a + 9)
                  .toString(36)
                  .toUpperCase()

      /*----------*/

       let col = document.createElement("th")
           col.innerHTML = letter
           cols.appendChild(col)
  }

     /*----------*/ // columns start one over -->  __|A|B|C

           cols.firstChild.innerHTML = ""
           return cols
}
  
export 
default 
Columns