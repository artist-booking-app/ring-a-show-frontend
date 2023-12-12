import PerformancesList from "../components/PerformancesList";
import ArtistsList from "../components/ArtistsList";
import { useEffect, useState } from "react";
import axios from "axios";
import "../pages/HomePage.css"

function HomePage() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [artistsData, setArtistsData] = useState([]);
  const [selectedPerformances, setSelectedPerformances] = useState([]);

  const getApiData = () => {
    axios
      .get(`${API_URL}/api/artists`)
      .then((response) => {
        setArtistsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getApiData();
  }, []);

  // Checkbox state change handler
  const handlePerformanceChange = (performanceType) => {
    const isSelected = selectedPerformances.includes(performanceType);

    if (isSelected) {
      setSelectedPerformances(
        selectedPerformances.filter(
          (performance) => performance !== performanceType
        )
      );
    } else {
      setSelectedPerformances([...selectedPerformances, performanceType]);
    }
  };

  // Filter artists based on selected performances
  const filteredArtists = artistsData.filter(
    (artist) =>
      selectedPerformances.length === 0 ||
      artist.typeOfPerformance.some((performance) =>
        selectedPerformances.includes(performance)
      )
  );

  return (
    <div className="HomePage">
      <h1>HomePage</h1>

      <div >
        <h2>Filter by Performance Type</h2>
        <div className="filter-container">
          {[
            "Music",
            "Comedy",
            "Dance",
            "Theatre",
            "Magic",
            "Circus",
            "Multidisciplinary",
            "Performance Art",
          ].map((performance) => (
            <label key={performance} className="filter-label">
              <input
                type="checkbox"
                value={performance}
                checked={selectedPerformances.includes(performance)}
                onChange={() => handlePerformanceChange(performance)}
              />
              {performance}
            </label>
          ))}
        </div>

        <h2>Artists</h2>
        <ul>
          {filteredArtists.map((artist) => (
            <li key={artist._id}>
              <h3>{artist.artistName}</h3>
              <p> {artist.typeOfPerformance}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* <PerformancesList /> */}
      {/* <ArtistsList /> */}
    </div>
  );
}

export default HomePage;
