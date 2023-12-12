import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import "../components/Navbar.css"
function Navbar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);   

    const userId = user?._id;

   
    return (
      <nav className="Navbar" > 
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
        
        {!isLoggedIn ? (
          <>
            <Link to="/signup"> <button>Sign Up</button> </Link>
            <Link to="/login"> <button>Login</button> </Link>
          </>
        ) : (
          <>
            <Link to={`/users/${userId}`} ><button>My Profile</button> </Link>
          </>
        ) }
      </nav>
    );
  }
   
  export default Navbar;