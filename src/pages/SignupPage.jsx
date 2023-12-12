import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/SignupPage.css"

function SignupPage() {

const API_URL = import.meta.env.VITE_API_URL

const [userName, setUserName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [isArtist, setIsArtist] = useState(false)
const [errorMessage, setErrorMessage] = useState(undefined)

const navigate = useNavigate()

const handleSignupSubmit = (e) => {
    e.preventDefault()

    const requestBody = {
        userName,
        email,
        password,
        isArtist
    }

    axios.post(API_URL + "/auth/signup", requestBody)
    .then((response) => {
        navigate('/login')
    })
    .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
    })
    console.log(requestBody)
    
}

    return(
        <>
        <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>User Name:</label>
        <input
          type="text"
          name="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label>Are you an artist?</label>
                <label>
                    <input
                        type="radio"
                        name="isArtist"
                        value="true"
                        checked={isArtist === true}
                        onChange={() => setIsArtist(true)}
                    />
                    Yes
                </label>
                <label>
                    <input
                        type="radio"
                        name="isArtist"
                        value="false"
                        checked={isArtist === false}
                        onChange={() => setIsArtist(false)}
                    />
                    No
                </label>
        <button type="submit">Sign Up</button>
      </form>
        </>
    )
}

export default SignupPage;