import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
useState;

const urlAPI = import.meta.env.VITE_API_URL;

function PerformancesList() {
  const [loading, setLoading] = useState(true);
  const [performances, setPerformances] = useState([]);
  const [showForm, setShowForm] = useState(true);

  function getAllPerformances() {
    setLoading(true);
    axios
      .get(`${urlAPI}/api/performances`)
      .then((response) => {
        setLoading(false);
        setPerformances(response.data);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }

  useEffect(() => {
    getAllPerformances();
  }, []);

  return (
    <div className="PerformancesPage">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="performances-list">
          {performances.map((performance) => {
            return (
              <li className="performance-card" key={performance._id}>
                <Link to={`/performances/${performance._id}`}>
                  <h2>{performance.title} </h2>
                </Link>
                <p>{performance.description}</p>
                <p>Requirements: {performance.requirements} </p>
                <span>Fee: {performance.fee} </span>
                <br />
                {performance.typeOfPerformance.map((type, index) => (
                  <span key={index}>Type: {type}</span>
                ))}
                {/* <button>Book Now</button> */}
                <button onClick={() => setShowForm(!showForm)}>
                  {!showForm ? (
                    <p>Book Test</p>
                  ) : (
                    <BookingForm artistId={artistId} performanceId={artist.performancesAvailable._id} API_URL={API_URL} artistName={artist.artistName} performanceName={artist.performancesAvailable.title} />
                  )}{" "}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default PerformancesList;
