import React, { Component } from 'react';
import './App.css';
import Form from "./Components/Form";
import Recipes from "./Components/Recipes";

const API_KEY = "bb89b65280b78567a81f76e66875eac9";

class App extends Component {

  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`);

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }

  componentDidMount = () => {
    // Check local storage for stored "recipes" string before page tries to render null data and crashes.
    // !!! Change to default view or message about performing a first or suggested search.
    if(localStorage.getItem("recipes") !== null) {
      const json = localStorage.getItem("recipes");
      const recipes = JSON.parse(json);
      this.setState({ recipes });
    }
  }

  componentDidUpdate = () => {
    // Create a string that contains all the JSON data from the search to be kept in local storage.
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={ this.getRecipe }/>
        <Recipes recipes={ this.state.recipes }/>
      </div>
    );
  }
}

export default App;