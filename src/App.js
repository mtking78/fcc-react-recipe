import React, { Component } from 'react';
import './App.css';
import Form from "./Components/Form";

class App extends Component {

  getRecipe = (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    console.log(recipeName);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
      </div>
    );
  }
}

export default App;