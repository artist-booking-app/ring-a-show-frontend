import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookingDetailsPage() {

const API_URL = import.meta.env.VITE_API_URL

const {bookingId} = useParams()

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

                        <button>Edit Booking</button>
                        <button>Cancel Booking</button>
                    </>
                )
            }

        </>
    )
}

export default BookingDetailsPage;