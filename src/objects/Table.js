import Cols from "./Columns"
import Rows from "./Rows"

const Table  = () => {
  let  rowCount = 100
  let  table = document.getElementById("table")
       table .appendChild(Cols())

  for (let i = 0; i < rowCount; ++i)
  {
       table .appendChild(Rows(i))
  }

}

export 
default 
Table