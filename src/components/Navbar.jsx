import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);   
   
    return (
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
   
        {/*    UPDATE     */}
        {isLoggedIn && (
          <>
            <Link to="/artists">
              <button>Artists</button>
            </Link>   

            <button onClick={logOutUser}>Logout</button>
          </>
        )}

        <Link to="/users/:userId">
          <button>My Profile</button>
        </Link>
   
        {!isLoggedIn && (
          <>
            <Link to="/signup"> <button>Sign Up</button> </Link>
            <Link to="/login"> <button>Login</button> </Link>
          </>
        )}
      </nav>
    );
  }
   
  export default Navbar;