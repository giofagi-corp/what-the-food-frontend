import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProfilePage from "./pages/EditProfilePage";
import ProfilePage from "./pages/ProfilePage";
import EditProfile from "./pages/EditProfilePage";
import RecipePage from "./pages/RecipePage";


import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute"; // <== IMPORT
import AnonRoute from "./components/AnonRoute"; // <== IMPORT

import TopRecipesPage from "./pages/TopRecipesPage";
import TopCuisinePage from "./pages/TopCuisinePage";
import TopIngredientsPage from "./pages/TopIngredientsPage";
import NotificationsPage from "./pages/NotificationsPage";
import NewRecipe from "./pages/NewRecipe";
import RecipePageUser from "./pages/RecipePageUser";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <PrivateRoute exact path="/top-recipes" component={TopRecipesPage} />
        <PrivateRoute exact path="/top-cuisine" component={TopCuisinePage} />
        <PrivateRoute exact path="/top-ingredients" component={TopIngredientsPage} />
        <PrivateRoute exact path="/notifications" component={NotificationsPage} />
        <PrivateRoute exact path="/profile" component={ProfilePage} />
        <PrivateRoute exact path="/add-recipe" component={NewRecipe} />
        <PrivateRoute exact path="/search" component={HomePage} />
        <PrivateRoute exact path="/recipe/:id" component={RecipePage} /> 
        <PrivateRoute exact path="/edit-profile" component={EditProfile} /> 
        <PrivateRoute exact path="/recipe/:id" component={RecipePage} />
        <PrivateRoute exact path="/recipe-user/:id" component={RecipePageUser} />
        <PrivateRoute exact path="/edit-profile" component={EditProfilePage} />

        {/* 👇 UPDATE THE EXISTING ROUTES 👇  */}
        <PrivateRoute exact path="/projects" component={ProjectListPage} />
        <PrivateRoute
          exact
          path="/projects/:id"
          component={ProjectDetailsPage}
        />

        <AnonRoute exact path="/signup" component={SignupPage} />
        <AnonRoute exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
