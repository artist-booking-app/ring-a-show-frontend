import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Favourites from "./AddToFavourites";

function ArtistsList(props) {
  const API_URL = import.meta.env.VITE_API_URL;

  const [artists, setArtists] = useState([]);

  const getApiData = () => {
    axios
      .get(`${API_URL}/api/artists`)
      .then((response) => {
        setArtists(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getApiData();
  }, []);


  return (
    <>
      {artists === null ? (
        <p>Loading...</p>
      ) : (
            <>
              <div>
                {artists.map((artist) => (
                  <div className="artist-info">
                    <Link to={`/artists/${artist._id}`}>
                    <h3>{artist.artistName}</h3>
                    </Link>
                    <img src={artist.imagePath} alt="artist picture" />
                    <p>Type: {artist.typeOfPerformance}</p>
                    <p>Genre: {artist.genre}</p>
                    <p>Available in: {artist.cityLocation}</p>
                    <p>{artist.about.biography}</p>
                    <a>{artist.about.showreel}</a>
                  </div>
                ))}
              </div>
            </>
          )
        }
    </>
  );
}

export default ArtistsList;
