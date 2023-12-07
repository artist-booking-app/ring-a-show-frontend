import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const urlAPI = import.meta.env.VITE_API_URL;

function CreatePerformancePage() {
  const [performance, setPerformance] = useState({});

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [typeOfPerformance, setTypeOfPerformance] = useState([]);
  const [fee, setFee] = useState("");
  const [requirements, setRequirements] = useState("");

  const [loading, setLoading] = useState(false);


  // Create performance
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const reqBody = {
      title,
      description,
      typeOfPerformance,
      fee,
      requirements,
    };

    axios
      .post(`${urlAPI}/api/performances `, reqBody)
      .then((response) => {
        setLoading(false);
        console.log("Performance updated successfully: " + reqBody);
        navigate(`/performances`);
      });
  };
  
  return (
    <div className="CreatePerformance">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3>Create Performance Details</h3>

          <form onSubmit={handleFormSubmit} className="create-form-performance">
            <div className="form-item">
              <label htmlFor="title">Title of the performance</label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                required={true}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-item">
              <label htmlFor="description">
                Description of the performance
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                required={true}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-item">
              <label htmlFor="typeOfPerformance">Type of the performance</label>
              <select
                name="typeOfPerformance"
                required={true}
                value={typeOfPerformance}
                onChange={(e) => setTypeOfPerformance(e.target.value)}
              >
                <option disabled select value="">
                  {" "}
                  Select
                </option>
                <option value="Music">Music</option>
                <option value="Theatre">Theatre</option>
                <option value="Dance">Dance</option>
                <option value="Improv">Improve</option>
              </select>
            </div>

            <div className="form-item">
              <label htmlFor="fee">Fee of the performance</label>
              <input
                type="number"
                name="fee"
                placeholder="Fee"
                required={true}
                value={fee}
                onChange={(e) => setFee(e.target.value)}
              />
            </div>

            <div className="form-item">
              <label htmlFor="requirements">
                Requirements of the performance
              </label>
              <input
                type="text"
                name="requirements"
                placeholder="requirements"
                required={true}
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
              />
            </div>
            <button type="submit">Create Performance</button>
          </form>
        </>
      )}
    </div>
  );
}

export default CreatePerformancePage;
