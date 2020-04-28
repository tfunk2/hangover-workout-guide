import React, { Component } from 'react';
import './App.css';
import DrinkForm from "./Components/DrinkForm"

class App extends Component{

  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <DrinkForm/>
        
      </div>
    );
  }
}

export default App;
