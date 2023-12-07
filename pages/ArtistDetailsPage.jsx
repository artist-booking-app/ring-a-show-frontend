import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ArtistDetailsPage() {

    const API_URL = import.meta.env.VITE_API_URL

    const [artist, setArtist] = useState(null)
    const{artistId} = useParams()
    
    const getApiData = () => {
        axios.get(`${API_URL}/api/artists/${artistId}`)
        .then((response) => {
            setArtist(response.data)
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
    
            {artist === null 
            ? <p>Loading...</p>
            : 
                    <div>
                        <h1>{artist.artistName}</h1>
                        <h2>{artist.typeOfPerformance}</h2>
                        <h2>{artist.genre}</h2>
                        <h3>{artist.cityLocation}</h3>
                        <p>{artist.about.biography}</p>
                    </div>
                
            }
            </>
        )
}

export default ArtistDetailsPage;