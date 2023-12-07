import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ArtistsPage from '../pages/ArtistsPage'
import ArtistDetailsPage from '../pages/ArtistDetailsPage'
import PerformanceDetailsPage from '../pages/PerformanceDetailsPage'
import PerformancesPage from '../pages/PerformancesPage'
import BookingPage from '../pages/BookingPage'
import UserPage from '../pages/UserPage'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import FavouritesPage from '../pages/FavouritesPage'
import axios from 'axios'
import CreateArtistPage from '../pages/CreateArtistPage'
 



function App() {

// add favourite Artists
  const API_URL = import.meta.env.VITE_API_URL
  const [artists, setArtists] = useState([])

  const getApiData = () => {
      axios.get(`${API_URL}/api/artists`)
          .then((response) => {
              setArtists(response.data)
          })
          .catch((error) => {
              console.log(error)
          })
  }

  useEffect(() => {
      getApiData()
  }, [])

  const [favouritesArtists, setFavouritesArtists] = useState([])

  const addToFavourites = (artistId) => {
      const selectedArtist = artists.find((artist) => artist._id === artistId)
      const alreadyAdded = favouritesArtists.some(artist => artist._id === artistId)

      if (selectedArtist && !alreadyAdded) {
          setFavouritesArtists([selectedArtist, ...favouritesArtists])
      }
  }

  
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/artists" element={<ArtistsPage callback={addToFavourites} />} />
      <Route path="/artists/:artistId" element={<ArtistDetailsPage />} />
      <Route path="/artists/add" element={<CreateArtistPage />} />
      <Route path="/performances" element={<PerformancesPage/>} />
      <Route path="/performances/:performanceId" element={<PerformanceDetailsPage/>} />
      <Route path="/booking" element={<BookingPage/>} />
      <Route path="/users/:userId" element={<UserPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/favourites" element={<FavouritesPage favouritesArtists={favouritesArtists}/>} />
    </Routes>
      
    </>
  )
}

export default App
