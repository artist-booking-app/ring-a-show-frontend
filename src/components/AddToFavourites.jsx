import axios from "axios"
import { useState } from "react"
import { useContext } from 'react';
import {AuthContext} from '../context/auth.context';

function Favourites ({artistId}) {

const { user } = useContext(AuthContext)

const API_URL = import.meta.env.VITE_API_URL

 const [addToFavourites, setAddToFavourites] = useState(false)  

const handleAddToFavourites = () => {
    setAddToFavourites(true)

    axios.post(API_URL + "/api/users/" + user._id, {artistId})

    .then((response) => {
        setAddToFavourites(false)
   
    })
    .catch((error) => {
        setAddToFavourites(false)
        console.log(error)
    })
    console.log(user._id)
}

    return(
        <>

         <button onClick={handleAddToFavourites}>
            Add
         </button>
        </>
       
    )
}

export default Favourites