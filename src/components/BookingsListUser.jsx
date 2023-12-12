import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
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
  // const getArtistRef = () => {
  //   axios
  //     .get(`${API_URL}/api/artists/${artistRef}`)
  //     .then((response) => {
  //       // console.log("Artist founded" , response.data)
  //       setArtist(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const getPerformanceRef = () => {
  //   axios
  //     .get(`${API_URL}/api/performances/${performanceRef}`)
  //     .then((response) => {
  //       // console.log("Performance founded" , response.data)
  //       setPerformance(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const getBooking = () => {
  //   // console.log("Fetching booking with ID:", bookingRef);
  //   axios
  //     .get(`${API_URL}/api/bookings/${bookingRef}`)
  //     .then((response) => {
  //       setBooking(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching booking:", error);
  //     });
  // };

  useEffect(() => {
    getUserRef()
    // getArtistRef();
    // getPerformanceRef();
    // getBooking();
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
              <div>
                <p>Booking Reference: {booking._id}</p>
                <p>{booking.artistName}</p>
                <p>{booking.performanceName}</p>

                <Link to={`/bookings/${booking._id}`}>
                  <p>More details</p>
                </Link>

              </div>
            )
          })}
        </div>
      )}
    </>
  );
}

export default BookingsListUser;
