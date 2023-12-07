import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ArtistsPage(props) {

const API_URL = import.meta.env.VITE_API_URL

const [artists, setArtists] = useState([])

const getApiData = () => {
    axios.get(`${API_URL}/api/artists`)
    .then((response) => {
        setArtists(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
}

useEffect(() => {
    getApiData()
}, [])

    return(
        <>
            <Link to="/favourites">
                Favourites
            </Link>

            {artists === null
                ? <p>Loading...</p>
                : artists.map((elm) => {
                    return (
                        <>
                            <Link to={`/artists/${elm._id}`}>
                                <div>
                                    <h1>{elm.artistName}</h1>
                                    <h2>{elm.typeOfPerformance}</h2>
                                    <h2>{elm.genre}</h2>
                                    <h3>{elm.cityLocation}</h3>
                                    <p>{elm.about.biography}</p>
                                </div>
                            </Link>
                            <button onClick={() => { props.callback(elm._id) }}>
                                Add to Favourites
                            </button>
                        </>
                    )
                })
            }
        </>
    )
}

export default ArtistsPage;