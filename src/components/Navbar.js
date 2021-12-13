import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "../context/auth.context";  // <== IMPORT

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
    <Link to="/"><button>Home</button></Link>
    <Link to="/add-recipe"><button>Add</button></Link>
    <Link to="/notifications"><button>Notification</button></Link>
    <Link to="/profile"><button>Profile</button></Link>

      {/* <Link to="/">
        <button>Home</button>
      </Link>
-
      {isLoggedIn
        ? (<>
            <Link to="/projects">
              <button>Projects</button>
            </Link>
            <button onClick={logOutUser}>Logout</button>
            <span>{user.name}</span>
          </>)
        : 
        (<>
          <Link to="/signup"> <button>Signup</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>)
      } */}
    </nav>
  );
}

export default Navbar;