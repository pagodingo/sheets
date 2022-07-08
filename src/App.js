import React from "react"
import Table from "./objects/Table"
import "./App.css"


class App extends React.Component {
    constructor()
  { 
     super()
  }
  
    componentDidMount() 
  {
    Table()
  }

    render() 
  { 
    return <table id="table"/> 
  }
}
export 
default 
App