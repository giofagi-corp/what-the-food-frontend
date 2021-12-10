import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/login">
        <button>Add</button>
      </Link>
      <Link to="/signup">
        <button>Notifications</button>
      </Link>
      <Link to="/">
        <button>Profile</button>
      </Link>
    </nav>
  );
}

export default Navbar;