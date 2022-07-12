import activeCell from "../core/active-cell"

const Cell = (x, y) => {
  let cell      =  document.createElement("td")
      //cell      .setAttribute("position", "this")
  let editable  =  document.createElement("div")

  Object.assign(editable, {
    style: 'none',
    classList: ['cell'],
    onclick: activeCell,
    contentEditable: 'true',
    position: 'this'
  })

  cell.append(editable)

  return cell
}

export 
default 
Cell