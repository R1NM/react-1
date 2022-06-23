import './App.css';
import React, { Component } from 'react'
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>ROOT</h1>
        <AddNumberRoot/>
        <DisplayNumberRoot/>
      </div>
    );
  }
}

export default App;
