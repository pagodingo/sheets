export function exportFile(){
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