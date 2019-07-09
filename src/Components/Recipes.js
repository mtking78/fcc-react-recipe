import React from 'react';

const Recipes = props => (
  <div className="container">
    <div className="row">
      { props.recipes.map((recipe) => {
        return (
          <div
            className="col-md-4"
            key={ recipe.recipe_id }
            style={{ marginBottom:"2rem" }}
          >
            <div className="recipe_box">
              <img
                className="recipe_box-img"
                src={ recipe.image_url }
                alt={ recipe.title }
              />
              <div className="recipe_text">
                <h5 className="recipe_title">
                  {/* Keep titles reduced to 18 characters max */}
                  { recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 18)}...` }
                </h5>
                <p className="recipe_subtitle">
                  Publisher: <span>{ recipe.publisher }</span>
                </p>
              </div>
              <button className="recipe_button">View Recipe</button>
            </div>
          </div>
        );
      })
      }
    </div>
  </div>
);

export default Recipes;