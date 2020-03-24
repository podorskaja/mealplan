import React from 'react';
import {getRecipes} from "./data/database";
import {RecipeCard} from "./components/recipeCard";
import './App.css';
import Recipe from "./components/recipe";

class App extends React.Component {
    state = {
        recipes: getRecipes()
    };

    render() {
        return (
            <React.Fragment>
                {this.state.recipes.map(r => <RecipeCard recipe={r} standalone="true"/>)}
                {this.state.recipes.map(r => <Recipe recipe={r}/>)}
            </React.Fragment>
        );
    }
}
export default App;
