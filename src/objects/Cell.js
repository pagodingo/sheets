import activeCell from "../core/active-cell"

const Cell= ()=> {
  let cell=      document.createElement("td")
  let editable=  document.createElement("div")
  
  Object.assign(editable, {
    style: 'none',
    classList: ['cell'],
    onclick: activeCell,
    contentEditable: 'true'
  })

  cell  .append(editable)

         return cell
}

export 
default 
Cell