import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tsvData: [],
      headers: [],
      loadingState: 1
    };
    this.populateTable = this.populateTable.bind(this);
    this.closeEditor = this.closeEditor.bind(this);
    this.uploadFile = this.uploadTSV.bind(this);
  }


  closeEditor() {
    confirm("Are you sure you want to close?") ?
      this.setState({
        loadingState: 1
      })
      : alert("Canceled");
  }
  populateTable(data){

    if (data.length > 1){
    for (var i = 0; i < data.length; ++i){

      var rowNode = document.createElement("tr");
      var dataNode = ''
      var dataRow = []
      var entry = []

      for (var j = 0; j < data[j].length; ++j) {

        data[i][j].split('\t')[1] == undefined ? 
          dataRow = data[i][j].split(',') : 
          dataRow = data[i][j].split('\t') 

        for (var k = 0; k < dataRow.length; ++k){
          entry = dataRow[k]
          dataNode = document.createElement("td");
          var text = entry
          var inputNode = document.createElement("input")
          inputNode.value = text
          dataNode.appendChild(inputNode)
          rowNode.appendChild(dataNode)
        }
      }
      document.getElementById('table').appendChild(rowNode);
      
    }

  } else {
    var rowNode = document.createElement("tr")
    var entry = ''
    var d = data.join('')
    var row = d.split(',')
    for (var i = 0; i < row.length; ++i){
      var dataNode = document.createElement("td")
      var text = row[i]
      var inputNode = document.createElement("input")
      inputNode.value = text
      dataNode.appendChild(inputNode)
      rowNode.appendChild(dataNode)
    }
    document.getElementById('table').appendChild(rowNode)
  }
}

  uploadTSV() {
    document.getElementById('tsv-file').files[0] == undefined ?
    window.alert('please select a file.') : this.setState({loadingState: 2});

    let tsv = document.getElementById("tsv-file").files[0];
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
          tsvData: entries,
          headers: headers,
          loadingState: 3
        })

        return entries
    }).then(entries => this.populateTable(entries))
}

render() {
  if (this.state.loadingState == 1) {
    return (
      <div>
        <p>CSV/TSV Editor</p>
        <input id="tsv-file" type="file"></input>
        <button onClick={() => this.uploadFile()}>Upload File</button>
      </div>
    )
  } else if (this.state.loadingState == 2) {
    return(
      <div>
      <p>Loading File, please wait...</p>
      <p id="dummy"></p>
    </div>
  )
  } else if (this.state.loadingState == 3) {
    return (
      <div>
        <h3>welcome bruh</h3>
        <h3>Hosted on Dropbox</h3>
        <button style={{float: 'right',color: 'green',width: 100,height:30}}>Export</button>
        <label for='changefile'>Change file: </label>
        <input
          id='changefile'
          type="text"
          placeholder="enter file path e.g. /data - data (1).tsv"
        />
        <table id={"table"}
          style={{
            border: "1px solid #ddd",
            padding: "8px",
            fontFamily: "Arial, Helvetica, sans-serif",
            borderCollapse: "collapse",
          }}
        >
         {this.state.headers.map((header => (
           <th><input value={header}/></th>
         )))}
            </table>
      <button onClick={() => this.closeEditor()} class="fixed" id="fixy">
        Close Editor
      </button>
    </div>
  );
  }
}
}
export default App;