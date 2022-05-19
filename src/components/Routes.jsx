
import { Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import EditProfilePage from "../pages/EditProfilePage";
import ProfilePage from "../pages/ProfilePage";
import EditProfile from "../pages/EditProfilePage";
import RecipePage from "../pages/RecipePage";
import EditRecipePage from "../pages/EditRecipePage";
import PrivateRoute from "../components/PrivateRoute";
import TopRecipesPage from "../pages/TopRecipesPage";
import TopCuisinePage from "../pages/TopCuisinePage";
import TopIngredientsPage from "../pages/TopIngredientsPage";
import NotificationsPage from "../pages/NotificationsPage";
import NewRecipe from "../pages/NewRecipe";
import RecipePageUser from "../pages/RecipePageUser";
import RecipeListPage from "../pages/RecipeListPage";
import Navbar from "../components/Navbar";
import DesktopNavbar from "../components/DesktopNavbar";

const Routes = () => {
  return (
    <div>
        <Navbar />
        <DesktopNavbar/>
        <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute exact path="/recipes-list/:id" component={RecipeListPage} />
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
            <PrivateRoute exact path="/edit-recipe/:id" component={EditRecipePage} />
            <PrivateRoute exact path="/edit-profile" component={EditProfilePage} />
        </Switch>
    </div>
  )
}

export default Routes