import activeCell from "../core/active-cell"

const Cell = (x, y) => {

  let cell = document.createElement("td")

  Object.assign(cell, {
    /*style: 'none',*/
    classList: ['cell'],
    onclick: activeCell,
    contentEditable: 'true',
    position: [x, y]
  })

     //cell.append(editable)

     return cell
}

export 
default 
Cell