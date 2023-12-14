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
   <>
   <main className="form-container-create-performance">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Create Performance</h1>

          <form onSubmit={handleFormSubmit}>
            
              <label>
                Title of the performance
              <input
                type="text"
                name="title"
                placeholder="Title"
                required={true}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>

            
              <label>
                Description of the performance
              <input
                type="text"
                name="description"
                placeholder="Description"
                required={true}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
             </label>

              <label>
                Type of the performance
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
                Fee of the performance
              <input
                type="number"
                name="fee"
                placeholder="Fee"
                required={true}
                value={fee}
                onChange={(e) => setFee(e.target.value)}
              />
           </label>

              <label>
                Requirements of the performance
              <input
                type="text"
                name="requirements"
                placeholder="requirements"
                required={true}
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
              />
              </label>

            <button type="submit">Create Performance</button>

          </form>
        </>
      )}
      </main>
    </>
  );
}

export default CreatePerformancePage;
