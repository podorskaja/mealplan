import React from 'react';
import './recipe.css';
import Circle from "./circle";
import {RecipeCard} from "./recipeCard";
import {getRecipeById} from "../data/database";

class Recipe extends React.Component {
  state = {
    recipe: []
  }

  componentDidMount() {
    const recipe = getRecipeById(this.props.match.params.id);
    this.setState({recipe});
  }

  render() {
    if (this.state.recipe.length === 0) {
      return <h1>Loading...</h1>;
    }

    return (
      <React.Fragment>
        <RecipeCard recipe={this.state.recipe}/>
        <div className="container">
          <div>
            <p className="color1">Per serving:</p>
            <ul className="nutritional-value">
              <li>
                <Circle text="Calories" value={this.state.recipe.nutritional_value.calories}/>
              </li>
              <li>
                <Circle text="Fat" value={this.state.recipe.nutritional_value.fat}/>
              </li>
              <li>
                <Circle text="Carbs" value={this.state.recipe.nutritional_value.carbs}/>
              </li>
              <li>
                <Circle text="Protein" value={this.state.recipe.nutritional_value.protein}/>
              </li>
            </ul>
          </div>

          <h2 className="ingredients color2">Ingredients</h2>
          <hr className="hr-ingredients color1"/>
          <p className="color2">Ingredients for 1 serving</p>
          <ul className="color2">
            <li>3 eggs</li>
            <li>7g butter</li>
            <li>50g bacon</li>
            <li>50g smoked salmon</li>
            <li>Green salad</li>
          </ul>
        </div>

        <hr className="hr-ingredients color1"/>
        <hr className="hr-ingredients color1"/>
      </React.Fragment>
    );
  }
}

export default Recipe;