import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import "../pages/LoginPage.css"


function LoginPage() {

    const API_URL = import.meta.env.VITE_API_URL

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    
    const navigate = useNavigate();
   
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
   
    const { storeToken, authenticateUser } = useContext(AuthContext)
    
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password };

        axios.post(`${API_URL}/auth/login`, requestBody)
            .then((response) => {
                // Request to the server's endpoint `/auth/login` returns a response
                // with the JWT string ->  response.data.authToken
                console.log('JWT token', response.data.authToken);
                storeToken(response.data.authToken)
                authenticateUser()
                navigate('/');                                
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    };
    
    return (
      <div className="login-page">
        <h1>Login</h1>
   
        <form onSubmit={handleLoginSubmit}>
          <label>Email:</label>
          <input 
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
   
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
   
          <button type="submit">Login</button>
        </form>
        
        { errorMessage && <p className="error-message">{errorMessage}</p> }

        <div className="signup-link">
        <p>Don't have an account yet?</p>

          <Link to={"/signup"}>
            <button className="signup-button">
              Sign Up
            </button>
          </Link>
          
        </div>
        
      </div>
    )
  }

export default LoginPage;