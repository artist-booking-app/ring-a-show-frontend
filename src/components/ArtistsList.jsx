import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Favourites from "./AddToFavourites";

function ArtistsList(props) {
  const API_URL = import.meta.env.VITE_API_URL;

  const [artists, setArtists] = useState([]);
  const [selectedPerformances, setSelectedPerformances] = useState([])
  const [chosenCity, setChosenCity] = useState('')

  const getApiData = () => {
    axios
      .get(`${API_URL}/api/artists`)
      .then((response) => {
        setArtists(response.data);
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
    setChosenCity(e.target.value)
  }

  // Filter artists based on selected filterss
  const filteredArtists = artists.filter((artist) =>
    (selectedPerformances.length === 0 || artist.typeOfPerformance.some((performance) => selectedPerformances.includes(performance))) &&
    (chosenCity === "" || artist.cityLocation === chosenCity)
  );



  return (
    <>
      <h2>Filter by Performance Type</h2>
      <div className="filter-container">
        {['Music', 'Comedy', 'Dance', 'Theatre', 'Magic', 'Circus', 'Multidisciplinary', 'Performance Art'].map((performance) => (
          <button
            className="filter-label"
            key={performance}
            style={{ background: selectedPerformances.includes(performance) ? 'grey' : 'black' }}
            onClick={() => { handlePerformanceChange(performance) }}
          >
            {performance}
          </button>
        ))}
      </div>

      <h2>Filter by City</h2>
      <select value={chosenCity} onChange={handleCityChange}>
        <option value="">All Cities</option>
        <option value="Berlin">Berlin</option>
        <option value="Amsterdam">Amsterdam</option>
      </select>

      {artists === null ? (
        <p>Loading...</p>
      ) : (
            <>
              <div>
                {filteredArtists.map((artist) => (
                  <div className="artist-info">
                    <Link to={`/artists/${artist._id}`}>
                    <h3>{artist.artistName}</h3>
                    </Link>
                    {/* <img src={artist.imagePath} alt="artist picture" /> */}
                    <p>Type: {artist.typeOfPerformance}</p>
                    <p>Genre: {artist.genre}</p>
                    <p>Available in: {artist.cityLocation}</p>
                    <p>{artist.about.biography}</p>
                    <a>{artist.about.showreel}</a>
                  </div>
                ))}
              </div>
            </>
          )
        }
    </>
  );
}

export default ArtistsList;
