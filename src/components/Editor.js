const Editor = ({exportFile, importFile, }) => {
    return ( 
        <div>
          <input id="file" type="file"></input><button onClick={() => importFile()}>Import File</button>
          <table id="table" />
        </div>
    )
}

export default Editor;