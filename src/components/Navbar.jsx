import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import "../components/Navbar.css";
import logo from "../assets/logo-black.png";
import hamburgerIcon from "../assets/hamburger.svg"

function Navbar() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const userId = user?._id;

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
      setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <>
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
      <img className="hamburger-logo" src={hamburgerIcon} onClick={toggleHamburger} />
    </nav>

  {hamburgerOpen &&
    <nav className="hamburger-nav">
         {isLoggedIn && (
       <ul>
       <li>
       <Link to={`/artists/create`}>
             Create Artist
             </Link>
       </li>
       <li>
       <Link to={`/performances/create`}>
             Create Performance
             </Link>
       </li>
           <li>
             <Link to={`/users/${userId}`}>
               My Profile{" "}
             </Link>
           </li>
           <li>
             <button onClick={logOutUser}>Logout</button>
           </li>
     </ul>
      )}

      {!isLoggedIn && (
        <ul>
          <li>
          <Link to="/signup">
            {" "}
           Sign Up{" "}
          </Link>
          </li>
          <li>
          <Link to="/login">
            {" "}
            Login{" "}
          </Link>
          </li>
        </ul>
      )}

    </nav>
    }
    </>
  );
}

export default Navbar;
