import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import DeletePerformance from "../components/DeletePerformanceButton";


const urlAPI = import.meta.env.VITE_API_URL;

function EditPerformancePage() {
  const { performanceId } = useParams();
  const [performance, setPerformance] = useState({});

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [typeOfPerformance, setTypeOfPerformance] = useState([]);
  const [fee, setFee] = useState("");
  const [requirements, setRequirements] = useState("");

  const [loading, setLoading] = useState(true);


  function getPerformance() {
    setLoading(true);
    axios
      .get(`${urlAPI}/api/performances/${performanceId}`)
      .then((response) => {
        setLoading(false);
        setPerformance(response.data);

        setTitle(response.data.title || "");
        setDescription(response.data.description || "");
        setTypeOfPerformance(response.data.typeOfPerformance || "");
        setFee(response.data.fee || "");
        setRequirements(response.data.requirements || "");
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const reqBody = {
      title,
      description,
      typeOfPerformance,
      fee,
      requirements,
    };

    axios
      .put(`${urlAPI}/api/performances/${performanceId} `, reqBody)
      .then((response) => {
        console.log(reqBody)
        console.log("Performance updated successfully: " + response);
        navigate(`/performances/${performanceId}`);
      });
  };
  useEffect(() => {
    getPerformance();
  }, []);

  return (
    <>
    <main className="form-container-edit-performance">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Edit Performance Details</h1>

          <form onSubmit={handleFormSubmit}>

                <label>
                  Title of the performance:
                  <input
                    type="text"
                    name="title"
                    placeholder={performance.title}
                    required={true}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>

            
                <label>
                  Description of the performance:
                  <input
                    type="text"
                    name="description"
                    placeholder={performance.description}
                    required={true}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
           

                <label>
                  Type of performance:
                  <select
                    name="typeOfPerformance"
                    required={true}
                    value={typeOfPerformance}
                    onChange={(e) => setTypeOfPerformance(e.target.value)}
                  >
                    <option disabled select value="">
                      {" "}
                      Select an option
                    </option>
                    <option value="Music">Music</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Dance">Dance</option>
                    <option value="Theatre">Theatre</option>
                    <option value="Magic">Magic</option>
                    <option value="Circus">Circus</option>
                    <option value="Multidisciplinary">Multidisciplinary</option>
                    <option value="Performance Art">Performance Art</option>
                  </select>
                </label>

                <label>
                  Fee of the performance:
                  <input
                    type="number"
                    name="fee"
                    placeholder={performance.fee}
                    required={true}
                    value={fee}
                    onChange={(e) => setFee(e.target.value)}
                  />
                </label>
         
              <label>
                Requirements of the performance:
              <input
                type="text"
                name="requirements"
                placeholder={performance.requirements}
                required={true}
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
              />
            </label>

               
                  <button>Update details</button>

                  <DeletePerformance
                    performanceId={performanceId}
                    urlAPI={urlAPI}
                    navigate={navigate}
                  />
               

          </form>
        </>
      )}
      </main>
    </>
  );
}

export default EditPerformancePage;
