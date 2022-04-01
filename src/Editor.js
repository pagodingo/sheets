import React from "react";
import "./App.css";

class Editor extends React.Component {
  constructor() { super();
    this.state = {view: "Home"};
    this.import = this.import.bind(this);
    this.export = this.export.bind(this);
    this.openEditor = this.openEditor.bind(this);
    this.closeEditor = this.closeEditor.bind(this);
  }

handleChange(e){ true } //manage state change of cell(s)

import() {
  let file = document.getElementById('file').files[0] 
  if (file === undefined) {return alert("please select a file.")}

  file.stream().getReader().read().then(stream => {
    let decoder = new TextDecoder();
    let data = decoder.decode(stream.value)
    let sheet = []
    let table = []
    if (data.includes("\r\n")){ sheet = data.split('\r\n') } // split new lines if new lines are present
    
    sheet.split(',')
    for (var i = 0; i < sheet.length; ++i){
      
    }
  })
}
export(){
  let editor = document.getElementById("editor");
  let rows = [].slice.call(editor.children);
  let file = [];

  for (var i = 0; i < rows.length; ++i){
    let row = [].slice.call(rows[i].children)
    for (var j = 0; j < row.length; ++j){
      file.push(row[j].children[0].value)
    }
    file[file.length - 1] += '\r\n'// add some nice new lines to be pretty
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

openEditor(width, height){
  (async function (){
    return 0 // timeout needed to render. cant be bothered to fix.
  })().then(() => {
    for (var i = 0; i < height; ++i){
        let row = document.createElement("tr");
      for (var j = 0; j < width; ++j){
        let cell = document.createElement("td");
        let input = document.createElement("input");
          input.placeholder = "..."
          cell.appendChild(input);
          row.appendChild(cell);
      }
          document.getElementById("editor").appendChild(row);
    }})
  this.setState({view: "Editor"});
}

closeEditor() { confirm("Close Session?") ? this.setState({view: "Home"}) : alert("Canceled") }

render() {
  switch(this.state.view){
    case "Home":
      return (
        <div>
          <h1>cell-U-lite</h1>
          <input id="file" type="file"></input>
          <button onClick={() => this.import()}>Import File</button>
          <button onClick={() => this.openEditor(10,50)}>10 x 50</button>
          <button onClick={() => this.openEditor(50,50)}>50 x 50</button> 
          <button onClick={() => this.openEditor(100,100)}>100 x 100</button>
          <button onClick={() => this.openEditor(100,250)}>100 x 250</button>
        </div>
      )
    case "Editor":
      return ( 
        <div>
          <button id="export-btn" onClick={() => this.export()}>Export</button>
          <input id="file" type="file"></input><button onClick={() => this.import()}>Import File</button>
          <table id="editor" />
          <button id="close-editor-btn" class="fixed" onClick={() => this.closeEditor()}>Close Editor</button>
        </div>)}}}
export default Editor;