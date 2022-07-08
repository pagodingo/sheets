import Cols from "./Columns"
import Rows from "./Rows"

const Table  = () => {
  let  count = 100
  let  table = document.getElementById("table")
       table .appendChild(Cols())

  for (let c = count; --c;) 
  {
       table .appendChild(Rows())
  }

}

export 
default 
Table