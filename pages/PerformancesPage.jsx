import axios from "axios";
import { useEffect, useState } from "react";
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
        setEvents(response.data);
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
              <div className="performance-card" key={performance.id}>
                <h2>{performance.title} </h2>
                <p>{performance.description}</p>
                <p>{performance.requirements} </p>
                <span>{performance.fee} </span>
                {performance.typeOfPerformance.map((type) => {
                  return <span>type</span>;
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PerformancesPage;
