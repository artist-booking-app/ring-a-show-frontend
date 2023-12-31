import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

function BookingsListArtist () {
    const API_URL = import.meta.env.VITE_API_URL;

    const [bookingRefArr, setBookingRefArr] = useState([])
  
    const { user } = useContext(AuthContext)
  
    const getUserRef = () => {
      axios
        .get(`${API_URL}/api/users/${user?._id}`)
        .then((response) => {
          setBookingRefArr(response.data.bookingReference)
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
  
    useEffect(() => {
      getUserRef()
    }, []);
  
    return (
      <>
        {!bookingRefArr ? (
          <p>No Bookings</p>
        ) : (
          <div className="bookings-list-user">
            {bookingRefArr.map((booking) => {
              console.log(booking)
              return (
                <div className="booking-container-user">
                  <p>Booking Reference: {booking._id}</p>
                  <p>{booking.artistName}</p>
                  <p>{booking.performanceName}</p>

                  <Link to={`/bookings/${booking._id}`}>
                    <button>More details</button>
                  </Link>

                </div>
              )
            })}
          </div>
        )}
      </>
    );
}

export default BookingsListArtist