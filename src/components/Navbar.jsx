import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import "../components/Navbar.css";
import logo from "../assets/logo-black.png";
function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const userId = user?._id;

  return (
    <nav className="Navbar">
      <div className="logo">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      </div>
      
      <div className="navbar-buttons">


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
          <Link to="/signup">
            {" "}
            <button>Sign Up</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button>Login</button>{" "}
          </Link>
        </>
      ) : (
        <>
          <Link to={`/artists/create`}>
              <button>Create Artist</button>
              </Link>

            <Link to={`/performances/create`}>
              <button>Create Performance</button>
              </Link>
          <Link to={`/users/${userId}`}>
            <button>My Profile</button>{" "}
          </Link>
        </>
      )}
      </div>
      
    </nav>
  );
}

export default Navbar;
