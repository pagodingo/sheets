const Editor = ({exportFile, importFile, closeEditor}) => {
    return ( 
        <div>
          <button id="export-btn" onClick={() => exportFile()}>Export</button>
          <input id="file" type="file"></input><button onClick={() => importFile()}>Import File</button>
          <table id="table" />
          <button id="close-editor-btn" class="fixed" onClick={() => closeEditor()}>Close Editor</button>
        </div>
    )
}

export default Editor;