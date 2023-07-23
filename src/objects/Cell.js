import activeCell from "../core/active-cell"

const Cell = (x, y) => {

  let cell = document.createElement("td")

  Object.assign(cell, {
    classList: ['inactive'],
    contentEditable: 'true',
    position: [x, y]
  })
  
  return cell
}

export default Cell
