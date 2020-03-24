import React from 'react';
import './recipe.css';
import Circle from "./circle";
import {RecipeCard} from "./recipeCard";

function Recipe(props) {
  return (
    <React.Fragment>
      <RecipeCard recipe={props.recipe}/>

      <div className="container">
        <div>
          <p className="color1">Per serving:</p>
          <ul className="nutritional-value">
            <li>
              <Circle text="Calories" value={props.recipe.nutritional_value.calories}/>
            </li>
            <li>
              <Circle text="Fat" value={props.recipe.nutritional_value.fat}/>
            </li>
            <li>
              <Circle text="Carbs" value={props.recipe.nutritional_value.carbs}/>
            </li>
            <li>
              <Circle text="Protein" value={props.recipe.nutritional_value.protein}/>
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

export default Recipe;