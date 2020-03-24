import React, {Component} from 'react';
import './recipe.css';
import Circle from "./circle";

class Recipe extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="img-max-height">
          <img src="https://picsum.photos/550" alt="" className="img-fluid"/>
        </div>
        <div className="container">
          <h1 className="recipe-name">Scrambled Eggs</h1>
          <div>
            <p className="color1"> Per serving:</p>
            <ul className="nutritional-value">
              <li>
                <Circle text="Calories" value="333"/>
              </li>
              <li>
                <Circle text="Fat" value="111"/>
              </li>
              <li>
                <Circle text="Carbs" value="123"/>
              </li>
              <li>
                <Circle text="Protein" value="155"/>
              </li>
            </ul>

          </div>

          <h2 className="ingredients color2">Ingredients</h2>
          <p className="color2">Ingredients for 1 serving</p>
          <ul className="color2">
            <li>3 eggs</li>
            <li>7g butter</li>
            <li>50g bacon</li>
            <li>50g smoked salmon</li>
            <li>Green salad</li>
          </ul>
        </div>


      </React.Fragment>
    );
  }
}

export default Recipe;