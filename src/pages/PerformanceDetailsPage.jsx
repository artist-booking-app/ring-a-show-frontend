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
        <div>
          <h2>{performance.title} </h2>
          <p>{performance.description}</p>
          <p>Minimum requirementes: {performance.requirements} </p>
          <span>Performance fee: {performance.fee}€</span>
          <br />
          {performance.typeOfPerformance.map((type, index) => (
             <span key={index}>Type of performance: {type}</span>
          ))}

          <Link to={`/performances/${performance._id}/edit`}>
            <p>Go to edit page</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default PerformanceDetailsPage;
