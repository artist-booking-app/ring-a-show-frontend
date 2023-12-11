import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
useState;

function BookingsList({ bookingRef, performanceRef, artistRef }) {

  const API_URL = import.meta.env.VITE_API_URL;

  const [booking, setBooking] = useState("");
  const [artist, setArtist] = useState("");
  const [performance, setPerformance] = useState("");
  const [userData, setUserData] = useState("")
  const [bookingRefArr, setBookingRefArr] = useState([])

  const { user } = useContext(AuthContext)
  console.log(user)

  const getUserRef = () => {
    axios
      .get(`${API_URL}/api/users/${user?._id}`)
      .then((response) => {
        // console.log("Artist founded" , response.data)
        setUserData(response.data);
        console.log(response.data)
        setBookingRefArr(response.data.bookingReference)
        console.log(response.data.bookingReference)
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
        <ul className="bookings-list-user">
          {bookingRefArr.map((booking) => {
            console.log(booking)
            return (
              <li>
                <p>{booking._id}</p>
                <p>{booking.artistName}</p>
                <p>{booking.performanceName}</p>

              </li>
            )
          })}
          {bookingRef && <p>Booking reference: {bookingRef} </p>}
          {artist && <p>Artist: {artist.artistName}</p>}
          {performance && <p>Title of the performance: {performance.title}</p>}
          {booking && <p>Address: {booking.location.address}</p>}
          {booking && booking.location.indoor ? (
            <p>Indoors</p>
          ) : (
            <p>Outdoors</p>
          )}
          {booking && <p>{booking.location.typeOfLocation}</p>}
        </ul>
      )}
    </>
  );
}

export default BookingsList;
