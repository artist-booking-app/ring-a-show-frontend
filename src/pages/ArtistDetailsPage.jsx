import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ArtistDetailsPage() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [artist, setArtist] = useState(null);
  const { artistId } = useParams();

  const [showForm, setShowForm] = useState(false);

  const getApiData = () => {
    axios
      .get(`${API_URL}/api/artists/${artistId}`)
      .then((response) => {
        console.log(response.data);
        setArtist(response.data);
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
      {artist === null ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="artist-info">
            <h1>{artist.artistName}</h1>
            <img src={artist.imagePath} alt="artist picture" />
            <h2>{artist.typeOfPerformance}</h2>
            <span>Genre: {artist.genre}</span>
            <h4>Available in: {artist.cityLocation}</h4>
            <p>{artist.about.biography}</p>
            <a>{artist.about.showreel}</a>

            <hr />
            {artist.performancesAvailable !== "" && (
              <>
                <button onClick={() => setShowForm(!showForm)}>
                  {!showForm ? (
                    <p>Show Performances</p>
                  ) : (
                    <p>Hide Performances</p>
                  )}{" "}
                </button>
                {showForm && (
                  <div className="artist-performance-details">
                    <h5>Performances available: </h5>
                    <h2>{artist.performancesAvailable.title}</h2>
                    <span>
                      #{artist.performancesAvailable.typeOfPerformance}
                    </span>
                    <br />

                    <p>{artist.performancesAvailable.description}</p>
                    <p>Duration: {artist.performancesAvailable.duration}</p>
                    <p>Fee: {artist.performancesAvailable.fee}</p>
                    <p>
                      Requirements: {artist.performancesAvailable.requirements}
                    </p>
                    <button>Book this Performance</button>
                  </div>
                )}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default ArtistDetailsPage;
