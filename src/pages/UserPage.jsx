import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import BookingsList from "../components/BookingsList";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function UserPage() {
  const { userId } = useParams();

  const [user, setUser] = useState("");
  const [artistRef, setArtistRef] = useState("");
  const [performanceRef, setPerformanceRef] = useState("");
  const [bookingRef, setBookingRef] = useState("");

  useEffect(() => {
    axios.get(`${API_URL}/api/users/${userId}`).then((response) => {
      setUser(response.data);
      setArtistRef(response.data.bookingReference.artistRef);
      setPerformanceRef(response.data.bookingReference.performanceRef);
      setBookingRef(response.data.bookingReference._id);;
    });
  }, [userId]);

  return (
    <div>
      <h1>UserPage</h1>
      {user ? (
        <>

          <p>User Name : {user.userName}</p>

          <hr />
          <p>Booking List</p>
          <BookingsList
            artistRef={artistRef && artistRef}
            performanceRef={performanceRef && performanceRef}
            bookingRef={bookingRef && bookingRef}
          />
        </>
      ) : (
        <p>loading?</p>
      )}
    </div>
  );
}

export default UserPage;
