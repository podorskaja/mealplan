import * as PropTypes from "prop-types";
import React from "react";
import {Link} from "react-router-dom";


export function RecipeCard(props) {
  return (
    <React.Fragment>
      <section className="recipe-card">
        <div>
          <Link to={`/recipes/${props.recipe.id}`}>
            <img src={props.recipe.url} alt=""/>
          </Link>
        </div>
        <div className="container">
          <Link to={`/recipes/${props.recipe.id}`}>
            <h1 className="recipe-name">
              {props.recipe.name}
            </h1>
          </Link>
        </div>
      </section>
      {props.standalone && <br/>}
    </React.Fragment>
  );
}

RecipeCard.propTypes = {recipe: PropTypes.any};