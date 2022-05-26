const Home = ({importFile, openEditor}) => {
    return (
        <div>
          <h1>Sheets</h1>
          <input id="file" type="file"></input>
          <button onClick={() => importFile()}>Import File</button>
          <button onClick={() => openEditor(10,50)}>10 x 50</button>
          <button onClick={() => openEditor(50,50)}>50 x 50</button> 
          <button onClick={() => openEditor(100,100)}>100 x 100</button>
          <button onClick={() => openEditor(100,250)}>100 x 250</button>
        </div>
      )
}

export default Home;