import * as PropTypes from "prop-types";
import React from "react";
import './recipe.css';
import {Link} from "react-router-dom";


export function RecipeCard(props) {
  return (
    <React.Fragment>
      <div>
        <div>
          <Link to={`/recipes/${props.recipe.id}`}>
            <img src={props.recipe.url} alt="" className="img-fluid"/>
          </Link>
        </div>
        <div className="container">
          <Link to={`/recipes/${props.recipe.id}`}>
            <h1 className="recipe-name">
              {props.recipe.name}
            </h1>
          </Link>
        </div>
      </div>
      {props.standalone && <br/>}
    </React.Fragment>
  );
}

RecipeCard.propTypes = {recipe: PropTypes.any};