import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'


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
      <Route path="/users/:userId" element={<UserProfile/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
      
    </>
  )
}

export default App
