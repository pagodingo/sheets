const Columns = () => {

  let abc  = Array.from(Array(26).keys())
                  .map(key => (key + 10)
                  .toString(36)
                  .toUpperCase())
                  abc.unshift("") 
    
  let cols = document  .createElement("tr")
      cols .classList  = ['cols']

  abc.forEach(letter => {
       let col = document.createElement("th")
           col.innerHTML = letter
           cols.appendChild(col)
  })
           
           //cols.firstChild.innerHTML = ""// columns start one over -->  __|A|B|C
           return cols
}
  
export 
default 
Columns