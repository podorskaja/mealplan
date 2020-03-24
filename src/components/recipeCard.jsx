import * as PropTypes from "prop-types";
import React from "react";
import './recipe.css';


export function RecipeCard(props) {
  return (
    <React.Fragment>
      <div>
        <div>
          <img src={props.recipe.url} alt="" className="img-fluid"/>
        </div>
        <div className="container">
          <h1 className="recipe-name">{props.recipe.name}</h1>
        </div>
      </div>
      {props.standalone && <br/>}
    </React.Fragment>
  );
}

RecipeCard.propTypes = {recipe: PropTypes.any};