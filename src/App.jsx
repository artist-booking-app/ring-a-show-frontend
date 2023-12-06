import { useState } from 'react'
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
 


function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/artists" element={<ArtistsPage />} />
      <Route path="/artists/:artistId" element={<ArtistDetailsPage />} />
      <Route path="/performances" element={<PerformancesPage/>} />
      <Route path="/performances/:performanceId" element={<PerformanceDetailsPage/>} />
      <Route path="/booking" element={<BookingPage/>} />
      <Route path="/users/:userId" element={<UserPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
      
    </>
  )
}

export default App
