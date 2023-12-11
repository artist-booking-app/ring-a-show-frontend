import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ArtistsPage from './pages/ArtistsPage'
import ArtistDetailsPage from './pages/ArtistDetailsPage'
import PerformanceDetailsPage from './pages/PerformanceDetailsPage'
import PerformancesPage from './pages/PerformancesPage'
import BookingPage from './pages/BookingPage'
import UserPage from './pages/UserPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import EditPerformancePage from './pages/EditPerformancePage'
import CreatePerformancePage from './pages/CreatePerformancePage'
 
import FavouritesPage from './pages/FavouritesPage'
import axios from 'axios'
import CreateArtistPage from './pages/CreateArtistPage'
import Navbar from './components/Navbar'
import IsPrivate from './components/isPrivate'
 



function App() {
  
  return (
    <>

    <Navbar />
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/artists" element={<ArtistsPage />} />
      <Route path="/artists/:artistId" element={<ArtistDetailsPage />} />
      <Route path="/artists/add" element={<CreateArtistPage />} />
      <Route path="/performances" element={<PerformancesPage/>} />
      <Route path="/performances/create" element={<CreatePerformancePage/>} />
      <Route path="/performances/:performanceId" element={<PerformanceDetailsPage/>} />
      <Route path="/performances/:performanceId/edit" element={<EditPerformancePage/>} />
      <Route path="/booking" element={<BookingPage/>} />
      <Route path="/users/:userId" element={ <UserPage/> } />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>

    </>
  )
}

export default App
