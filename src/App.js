import React from 'react';
import {getRecipes} from "./data/database";
import {RecipeCard} from "./components/recipeCard";
import './styles.css';
import RecipeDetail from "./components/recipeDetail";
import {Navbar} from "./components/navbar";
import {Route, Switch} from "react-router-dom";

class App extends React.Component {
    state = {
        recipes: getRecipes()
    };

    render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>

          <Route
            path="/recipes/:id"
            render={(routeProps) => <RecipeDetail {...routeProps}/>}
          />


          <Route path="/recipes">
            {this.state.recipes.map(r => <RecipeDetail key={r.id} recipe={r}/>)}
          </Route>

          <Route exact path="/">
            {this.state.recipes.map(r => <RecipeCard key={r.id} recipe={r} standalone="true"/>)}
          </Route>

        </Switch>
      </React.Fragment>
    );
    }
}
export default App;
