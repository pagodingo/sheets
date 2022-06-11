import React from "react";
import "./App.css";
import Editor from "./components/Editor.js"

class App extends React.Component {
  constructor() 
  { 
    super();
  }

handleChange(e){ true } // necessary to manage state of cells

componentDidMount(){
  (async function (){
    return 0 // timeout needed to render.
  })().then(() => {
    for (var i = 0; i < 50; ++i){
        let row = document.createElement("tr");
      for (var j = 0; j < 100; ++j){
        let cell = document.createElement("td");
        let input = document.createElement("div");
          input.contentEditable = true;
          input.style = "none"
          input.classList.add("cell")
          input.onclick = (e) => {
            let actives = document.getElementsByClassName("active")
            if (actives.length == 0){
              e.target.parentElement.classList.add("active");
            } else {
              actives[0].classList.remove("active");
              e.target.parentElement.classList.add("active");
            }
          }
          cell.appendChild(input);
          row.appendChild(cell);
      }
          document.getElementById("table").appendChild(row);
    }})
  this.setState({view: "Editor"})
}

setActive = (element) => {
  return 0;
}

render() {
      return <Editor/>
}
}
export default App;
