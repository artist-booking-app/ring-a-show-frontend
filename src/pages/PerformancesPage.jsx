import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
useState;

const urlAPI = import.meta.env.VITE_API_URL;

function PerformancesPage() {
  const [loading, setLoading] = useState(true);
  const [performances, setPerformances] = useState([]);

  function refreshPage() {
    window.location.reload(false);
  }
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
        <div className="performances-list">
          {performances.map((performance) => {
            return (
              <div className="performance-card" key={performance._id}>
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
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PerformancesPage;
