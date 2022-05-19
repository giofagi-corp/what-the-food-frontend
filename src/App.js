import "./App.css";
import { Switch } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AnonRoute from "./components/AnonRoute"; 
import Routes from "./components/Routes";

function App() {

  return (
    <div className="App">

      <Switch>
        <AnonRoute exact path="/signup" component={SignupPage} />
        <AnonRoute exact path="/login" component={LoginPage} />
        <Routes />
      </Switch>
        
    </div>
  )
}

export default App;
