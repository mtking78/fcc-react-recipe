import React from 'react';

const API_KEY = "bb89b65280b78567a81f76e66875eac9";

class Recipe extends React.Component {

  state = {
    activeRecipe: []
  }

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);

    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
  }

  render() {

    const recipe = this.state.activeRecipe;

    return (
      <div className="container">
        {/* Loads activeRecipe container after data fetched */}
        { this.state.activeRecipe.length !== 0 &&
          <div className="active-recipe">
            <img
              className="active-recipe_img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe_title">
              { recipe.title }
            </h3>
            <h4 className="active-recipe_subtitle">
              Publisher: <span>{ recipe.publisher }</span>
            </h4>
            <p className="active-recipe_website">
              Website: <span>
                <a href="recipe.publisher_url">
                  { recipe.publisher_url }
                </a>
              </span>
            </p>
            <button className="active-recipe_button">
              Go Home
            </button>
          </div>
        }
      </div>
    );
  }
};

export default Recipe;