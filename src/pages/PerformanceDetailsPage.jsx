import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
useState;



const urlAPI = import.meta.env.VITE_API_URL;

function PerformanceDetailsPage() {
  const [loading, setLoading] = useState(true);
  const [performance, setPerformance] = useState({});
  const { performanceId } = useParams();


  function getPerformance() {
    setLoading(true);
    axios
      .get(`${urlAPI}/api/performances/${performanceId}`)
      .then((response) => {
        setLoading(false);
        setPerformance(response.data);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }

  useEffect(() => {
    getPerformance();
  }, []);

  return (
    <div className="PerformanceDetailsPage">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="performance-details-container">
          <h2>{performance.title} </h2>
          <p>{performance.description}</p>
          <p>Minimum requirementes: {performance.requirements} </p>
          <span>Performance fee: {performance.fee}€</span>
          <br />

          <p>Type of performance: {performance.typeOfPerformance}</p>

          <div>
          <Link to={`/performances/${performance._id}/edit`}>
            <button>Edit Performance</button>
          </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default PerformanceDetailsPage;
