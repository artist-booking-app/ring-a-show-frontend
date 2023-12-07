import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
useState;

const urlAPI = import.meta.env.VITE_API_URL;

function PerformanceDetailsPage() {
  const [loading, setLoading] = useState(true);
  const [performance, setPerformance] = useState({});
  const { performanceId } = useParams();

  function refreshPage() {
    window.location.reload(false);
  }

  function getPerformance() {
    setLoading(true);
    axios
      .get(`${urlAPI}/api/performances/${performanceId}`)
      .then((response) => {
        setLoading(false);
        console.log(response.data)
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
          {performance.typeOfPerformance.map((type) => {
            return <span>Type of performance: {type}</span>;
          })}
        </div>
      )}
    </div>
  );
}

export default PerformanceDetailsPage;
