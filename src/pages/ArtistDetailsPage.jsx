import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import "../pages/ArtistDetailsPage.css";

function ArtistDetailsPage() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [artist, setArtist] = useState(null);
  const { artistId } = useParams();

  const [showForm, setShowForm] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

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
          <div className="ArtistDetailsPage">
            <div className="artist-info">
              <img src={artist.imagePath} alt="artist picture" />
              <h1>{artist.artistName}</h1>
              <p>{artist.about.biography}</p>
              <h2>{artist.typeOfPerformance}</h2>
              <span>Genre: {artist.genre}</span>
              <h4>Available in: {artist.cityLocation}</h4>
              <a>{artist.about.showreel}</a>
            </div>

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
                  <>
                  <hr />
                  <h3>Performances available </h3>
                  <div className="container">
                       <div className="artist-performance-details">
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
                    <Link to={`/performances/${artist.performancesAvailable._id}`}>
                        <button>More Details</button>
                      </Link>
                    </div>
                    <button onClick={() => setShowBooking(!showBooking)}>
                      {!showBooking ? <p>Book Now</p> : <p>Hide Form</p>}{" "}
                    </button>
                    

                    {showBooking && (
                      <div className="booking-form">

                        <BookingForm
                          artistId={artistId}
                          performanceId={artist.performancesAvailable._id}
                          API_URL={API_URL}
                          artistName={artist.artistName}
                          performanceName={artist.performancesAvailable.title}
                        />
                      </div>
                    )}
                  
                  </div>
                  
                  </>
                 
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
