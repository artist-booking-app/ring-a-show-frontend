import PerformancesList from "../components/PerformancesList";
import ArtistsList from "../components/ArtistsList";
import { useEffect, useState } from "react";
import axios from "axios";
import "../pages/HomePage.css"

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
    getApiData();
  }, []);

  return (
    <div className="HomePage">
      <h1>HomePage</h1>

        {/* <PerformancesList /> */}
        <ArtistsList />
        </div>
      
    )
}

export default HomePage;
