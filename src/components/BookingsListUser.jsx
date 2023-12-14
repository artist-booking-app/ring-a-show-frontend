import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
useState;

function BookingsListUser({ bookingRef, performanceRef, artistRef }) {

  const API_URL = import.meta.env.VITE_API_URL;

  const [booking, setBooking] = useState("");
  const [artist, setArtist] = useState("");
  const [performance, setPerformance] = useState("");
  const [userData, setUserData] = useState("")
  const [bookingRefArr, setBookingRefArr] = useState([])

  const { user } = useContext(AuthContext)



  const getUserRef = () => {
    axios
      .get(`${API_URL}/api/users/${user?._id}`)
      .then((response) => {
        setUserData(response.data);
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
              <div className="booking-container">
                <div>
                  <p>Artist name: {booking.artistName}</p>
                  <p>Performance: {booking.performanceName}</p>
                </div>

                <div>
                  <p>Booking Reference: {booking._id}</p>
                  <Link to={`/bookings/${booking._id}`}>
                    <button>More details</button>
                  </Link>
                </div>

              </div>
            )
          })}
        </div>
      )}
    </>
  );
}

export default BookingsListUser;
