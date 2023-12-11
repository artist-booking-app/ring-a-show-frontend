import axios from "axios";
import { useEffect, useState } from "react";
useState;

function BookingsList({ bookingRef, performanceRef, artistRef }) {

  const API_URL = import.meta.env.VITE_API_URL;

  const [booking, setBooking] = useState("");
  const [artist, setArtist] = useState("");
  const [performance, setPerformance] = useState("");


  const getArtistRef = () => {
    axios
      .get(`${API_URL}/api/artists/${artistRef}`)
      .then((response) => {
        // console.log("Artist founded" , response.data)
        setArtist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getPerformanceRef = () => {
    axios
      .get(`${API_URL}/api/performances/${performanceRef}`)
      .then((response) => {
        // console.log("Performance founded" , response.data)
        setPerformance(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getBooking = () => {
    // console.log("Fetching booking with ID:", bookingRef);
    axios
      .get(`${API_URL}/api/bookings/${bookingRef}`)
      .then((response) => {
        setBooking(response.data);
      })
      .catch((error) => {
        console.error("Error fetching booking:", error);
      });
  };

  useEffect(() => {
    getArtistRef();
    getPerformanceRef();
    getBooking();
  }, []);

  return (
    <>
      {!booking ? (
        <p>No Bookings</p>
      ) : (
        <div className="bookings-list-user">
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
        </div>
      )}
    </>
  );
}

export default BookingsList;
