import PerformancesList from "../components/PerformancesList";
import ArtistsList from "../components/ArtistsList";
import { useEffect, useState } from "react";
import axios from "axios";


function HomePage() {

const API_URL = import.meta.env.VITE_API_URL;

const [artistsData, setArtistsData] = useState([])
const [selectedPerformances, setSelectedPerformances] = useState([])
const [chosenCity, setChosenCity] = useState('')

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
    getApiData()
  }, [])

  // Checkbox state change handler
  const handlePerformanceChange = (performanceType) => {
    const isSelected = selectedPerformances.includes(performanceType);

    if (isSelected) {
      setSelectedPerformances(selectedPerformances.filter((performance) => performance !== performanceType));
    } else {
      setSelectedPerformances([...selectedPerformances, performanceType]);
    }
  };

  // Dropdown state change handler
  const handleCityChange = (e) => {
    setChosenCity(e.target.value)
  }

  // Filter artists based on selected filterss
  const filteredArtists = artistsData.filter((artist) =>
    (selectedPerformances.length === 0 || artist.typeOfPerformance.some((performance) => selectedPerformances.includes(performance))) &&
    (chosenCity === "" || artist.cityLocation === chosenCity)
    );


    return(
        <>
            <h1>HomePage</h1>

            <div>
                <h2>Filter by Performance Type</h2>
                <div>
                    {['Music', 'Comedy', 'Dance', 'Theatre', 'Magic', 'Circus', 'Multidisciplinary', 'Performance Art'].map((performance) => (
                        <button 
                        key={performance}
                        style={{background: selectedPerformances.includes(performance) ? 'grey' : 'black'}}
                        onClick={() => {handlePerformanceChange(performance)}}
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

                <h2>Artists</h2>
                <ul>
                    {filteredArtists.map((artist) => (
                        <li key={artist._id}>
                            <h3>{artist.artistName}</h3>
                            <p>Type of Performance: {artist.typeOfPerformance}</p>
        
                        </li>
                    ))}
                </ul>
            </div>

        
        {/* <PerformancesList /> */}
        <ArtistsList />
        </>
        
    )
}

export default HomePage;