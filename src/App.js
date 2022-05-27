import React from "react";
import "./App.css";
import Home from "./components/Home.js"
import Editor from "./components/Editor.js"
import { resizeColumns } from "./core/resizeColumns.js"

class App extends React.Component {
  constructor() { super();
    this.state = {view: "Home"};
    this.importFile = this.importFile.bind(this);
    this.exportFile = this.exportFile.bind(this);
    this.openEditor = this.openEditor.bind(this);
    this.closeEditor = this.closeEditor.bind(this);
  }

handleChange(e){ true } // necessary to manage state of cells

importFile() {
  /*importFile() {
  let file = document.getElementById('file').files[0] 
  if (file === undefined) {return alert("please select a file.")}

  file.stream().getReader().read().then(stream => {
    let decoder = new TextDecoder();
    let data = decoder.decode(stream.value)
    let sheet = []
    let table = []
    if (data.includes("\r\n")){ sheet = data.split('\r\n') }
    
    sheet.split(',')
    for (var i = 0; i < sheet.length; ++i){
      
    }
  })
}*/
  document.getElementById('file').files[0] == undefined ?
  window.alert('please select a file.') : this.setState({view: "Editor"});

  let tsv = document.getElementById("file").files[0];
  tsv.stream().getReader().read()
  .then(stream => {
      var decoder = new TextDecoder();
      var decoded = decoder.decode(stream.value)
      var headers = []
      var entries = []
      var rows = []

      decoded.split('\r\n') === [] || decoded.split('\r\n')[1] == undefined ? 
        rows = decoded.split(',') : 
        rows = decoded.split('\r\n')

      for (var i = 0; i < rows.length; ++i){

        var row = rows[i]
        entries.push([row])

      }
      
      entries.shift();

      rows[0].split('\t')[1] == undefined ? 
        headers = rows[0].split(',') :
        headers = rows[0].split('\t')
      this.setState({
        view: "Editor"
      })

      return entries
  }).then(entries => this.populateTable(entries))
}

exportFile(){
  let editor = document.getElementById("editor");
  let rows = [].slice.call(editor.children);
  let file = [];

  for (var i = 0; i < rows.length; ++i){
    let row = [].slice.call(rows[i].children)
    for (var j = 0; j < row.length; ++j){
      file.push(row[j].children[0].value)
    }
    file[file.length - 1] += '\r\n'
  }

  (function (filename = 'export.csv', text = file) {
    let a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    a.setAttribute('download', filename);
    a.click();
    document.body.removeChild(a);
  })()
}

setActive = (element) => {
  return 0;
}

openEditor(width, height){
  (async function (){
    return 0 // timeout needed to render.
  })().then(() => {
    for (var i = 0; i < height; ++i){
        let row = document.createElement("tr");
      for (var j = 0; j < width; ++j){
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
  this.setState({view: "Editor"});
  //resizeColumns();
}

closeEditor() { confirm("Close Session?") ? this.setState({view: "Home"}) : alert("Canceled") }

render() {
  switch(this.state.view){
    case "Home":
      return <Home 
        importFile={this.importFile}
        openEditor={this.openEditor}
      />
    case "Editor":
      return <Editor
        importFile={this.importFile}
        exportFile={this.exportFile}
        closeEditor={this.closeEditor}
      />
  }
}
}
export default App;
