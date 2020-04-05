import React from 'react';
import Circle from "./circle";
import {RecipeCard} from "./recipeCard";
import {getRecipeById} from "../data/database";

class RecipeDetail extends React.Component {
    state = {
        recipe: []
    };

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
                <section id="recipe-detail" className="container">
                    <div id="nutritional-value">
                        <p>Per serving:</p>
                        <ul>
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

                    <div id="ingredients">
                        <h2>Ingredients</h2>
                        <hr/>
                        <p>Ingredients for 1 serving</p>
                        <ul>
                            {this.state.recipe.ingredients.map(i =>
                                <li>{i}</li>
                            )}
                        </ul>
                    </div>
                </section>


            </React.Fragment>
        );
    }
}

export default RecipeDetail;