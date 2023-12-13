import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function BookingDetailsPage() {

const API_URL = import.meta.env.VITE_API_URL

const {bookingId} = useParams()

const {user} = useContext(AuthContext)

const navigate = useNavigate()

const [bookingDetails, setBookingDetails] = useState(null)

const getBookingDetails = () => {
    axios.get(`${API_URL}/api/bookings/${bookingId}`)
    .then((response) => {
        setBookingDetails(response.data)
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
}

useEffect(() => {
    getBookingDetails()
}, [])

 // Cancel specific booking
 const cancelBooking = () => {
    axios.delete(`${API_URL}/api/bookings/${bookingId}`)
    .then(() => {

        axios.put(`${API_URL}/api/users/${user._id}`, {$pull: {bookingReference: bookingId}})
        .then((response) => {
            navigate("/")
        })
     
    })
    .catch((error) => {
      console.log(error)
    })
  }

    return (
        <>
            {bookingDetails === null ?
                <p>Loading...</p>
                : (
                    <>
                        <h3>Booking reference: {bookingDetails._id}</h3>
                        <h3>Artist name: {bookingDetails.artistName}</h3>
                        <h3>Performance: {bookingDetails.performanceName}</h3>
                        <h3>Date and Time: {bookingDetails.date}</h3>
                        <p>Address: {bookingDetails.location.address}</p>

                        <p>Type of Location: {bookingDetails.location.typeOfLocation}</p>

                        {bookingDetails.location.indoor ?
                            <p>Indoor</p> :
                            <p>Outdoor</p>
                        }

                        <Link to={`/bookings/${bookingId}/edit`}>
                        <button>Edit Booking</button>
                        </Link>

                        <button onClick={cancelBooking}>Cancel Booking</button>
                    </>
                )
            }

        </>
    )
}

export default BookingDetailsPage;