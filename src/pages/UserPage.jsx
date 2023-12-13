import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import BookingsListUser from "../components/BookingsListUser";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import BookingsListArtist from "../components/BookingsListArtist";

const API_URL = import.meta.env.VITE_API_URL;



function UserPage() {
  const { userId } = useParams();

  const [user, setUser] = useState("");
  const [artistRef, setArtistRef] = useState("");
  const [performanceRef, setPerformanceRef] = useState("");
  const [bookingRef, setBookingRef] = useState("");

  useEffect(() => {
    axios.get(`${API_URL}/api/users/${userId}`).then((response) => {
      console.log(response.data)
      console.log(response.data.bookingReference)
      setUser(response.data);
      setArtistRef(response.data.bookingReference?.artistRef);
      setPerformanceRef(response.data.bookingReference?.performanceRef);
      setBookingRef(response.data.bookingReference?._id);;
    });
  }, [userId]);

  return (
    <div>
      <h1>UserPage</h1>
      {user ? (
        <>

          <p>User Name : {user.userName}</p>

          <hr />
          <h2>My Bookings</h2>

          {user.isArtist ? (
            <>
        

              <BookingsListArtist />
            </>
          ) : ( <BookingsListUser
              artistRef={artistRef && artistRef}
              performanceRef={performanceRef && performanceRef}
              bookingRef={bookingRef && bookingRef}
            />
          )
          }


        </>
      ) : (
        <p>loading?</p>
      )}
    </div>
  );
}

export default UserPage;
