import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ArtistDetailsPage from './pages/ArtistDetailsPage'
import PerformanceDetailsPage from './pages/PerformanceDetailsPage'
import PerformancesPage from './pages/PerformancesPage'
import BookingDetailsPage from './pages/BookingDetailsPage'
import UserPage from './pages/UserPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import EditPerformancePage from './pages/EditPerformancePage'
import CreatePerformancePage from './pages/CreatePerformancePage'
import CreateArtistPage from './pages/CreateArtistPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import IsPrivate from './components/isPrivate'
import IsAnon from './components/isAnon'
import ArtistsPage from './pages/ArtistsPage'
import EditBookingDetailsPage from './pages/EditBookingDetailsPage'
 



function App() {
  
  return (
    <>

    <Navbar />
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/artists" element={<ArtistsPage />} />
      <Route path="/artists/:artistId" element={<ArtistDetailsPage />} />
      <Route path="/artists/create" element={<CreateArtistPage />} />
      <Route path="/performances" element={<PerformancesPage/>} />
      <Route path="/performances/create" element={<CreatePerformancePage/>} />
      <Route path="/performances/:performanceId" element={<PerformanceDetailsPage/>} />
      <Route path="/performances/:performanceId/edit" element={<EditPerformancePage/>} />
      <Route path="/bookings/:bookingId" element={<BookingDetailsPage/>} />
      <Route path="/bookings/:bookingId/edit" element={<EditBookingDetailsPage />} />
      <Route path="/users/:userId" element={ <UserPage/> } />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>

    <Footer />
    </>
  )
}

export default App
