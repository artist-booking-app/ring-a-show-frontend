import { useEffect, useState } from "react";
import axios from "axios";
import "../pages/HomePage.css";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";



function HomePage() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [artistsData, setArtistsData] = useState([]);
  const [selectedPerformances, setSelectedPerformances] = useState([]);
  const [chosenCity, setChosenCity] = useState("");

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

  // Dropdown state change handler
  const handleCityChange = (e) => {
    setChosenCity(e.target.value);
  };

  // Filter artists based on selected filterss
  const filteredArtists = artistsData.filter(
    (artist) =>
      (selectedPerformances.length === 0 ||
        artist.typeOfPerformance.some((performance) =>
          selectedPerformances.includes(performance)
        )) &&
      (chosenCity === "" || artist.cityLocation === chosenCity)
  );

  return (
    <div className="HomePage">
      <Banner />


      <section className="bridge-section">
        <div className="bridge-content">
          <h2>Find Local Artists Waiting for You</h2>
          <p>
            Discover talented local artists and book their performances for a
            unique experience.
          </p>
        </div>
      </section>

      <div className="filter-container">
        <div className="performance-filter">
          <h2>What kind of performance?</h2>
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
            <button
              className="filter-label"
              key={performance}
              style={{
                background: selectedPerformances.includes(performance)
                  ? "rgba(126, 237, 156)" //green
                  : "rgba(255, 255, 255, 0.87)", //white
              }}
              onClick={() => {
                handlePerformanceChange(performance);
              }}
            >
              {performance}
            </button>
          ))}
        </div>

        <div className="city-filter">
          <h2>Select your city</h2>
          <select value={chosenCity} onChange={handleCityChange}>
            <option value="">All Cities</option>
            <option value="Berlin">Berlin</option>
            <option value="Amsterdam">Amsterdam</option>
          </select>
        </div>
      </div>

      <div className="artists-container">
      <h2>Artists nearby</h2>
      {filteredArtists ? (
        <div className="artists-list">
          <ul>
            {filteredArtists.map((artist) => (
              <Link to={`/artists/${artist._id}`}>
              <li key={artist._id}
               style={{
                backgroundImage: `url(${artist.imagePath})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
              }} >
                <Link to={`/artists/${artist._id}`}>
                  <h3>{artist.artistName}</h3>
                </Link>
                <p style={{fontStyle: 'italic'}} >{artist.typeOfPerformance}</p>
              </li>
              </Link>
              
            ))}
          </ul>
        </div>
      ) : (
        <p>No Artists Available</p>
      )}
      </div>
    </div>
  );
}

export default HomePage;
