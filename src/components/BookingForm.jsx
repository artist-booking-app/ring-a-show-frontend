import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import "../components/BookingForm.css";

function BookingForm({
  performanceId,
  artistId,
  API_URL,
  artistName,
  performanceName,
}) {
  const [address, setAddress] = useState("");
  const [typeOfLocation, setTypeOfLocation] = useState("");
  const [indoor, setIndoor] = useState(true);
  const [date, setDate] = useState("");
  const { user } = useContext(AuthContext);

  const [bookingRefArr, setBookingRefArr] = useState([]);

  const bookNowHandler = (e) => {
    e.preventDefault();

    const requestBody = {
      artistRef: artistId,
      artistName: artistName,
      performanceRef: performanceId,
      performanceName: performanceName,
      userRef: user._id,
      date,
      location: {
        address,
        typeOfLocation,
        indoor,
      },
    };

    axios
      .post(API_URL + "/api/bookings", requestBody)
      .then((response) => {
        console.log(response + "Booking was successful");
        console.log(response.data._id);

        const bookingId = response.data._id;

        axios
          .put(API_URL + `/api/users/${user._id}`, {
            $push: { bookingReference: bookingId },
          })
          .then((response) => {
            console.log(response.data, "user details");
          });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={bookNowHandler}>
        <h3>Book this performance</h3>
        <hr />
        <label>Address</label>
        <input
          type="text"
          name="address"
          required={true}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label>Date</label>
        <input
          type="datetime-local"
          name="datetime"
          required={true}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Type of Location</label>
        <select
          type="option"
          name="type of location"
          required={true}
          value={typeOfLocation}
          onChange={(e) => setTypeOfLocation(e.target.value)}
        >
          <option disabled select value="">
            {" "}
            Select
          </option>
          <option value="Private">Private</option>
          <option value="Commercial">Commercial</option>
        </select>

        <label>Indoor?</label>
        <label>
          <input
            type="radio"
            name="indoor"
            value="true"
            checked={indoor === true}
            onChange={() => setIndoor(true)}
          />
          Yes
          <input
            type="radio"
            name="outdoor"
            value="false"
            checked={indoor === false}
            onChange={() => setIndoor(false)}
          />
          No
        </label>

        <button>Book Now</button>
      </form>
    </>
  );
}

export default BookingForm;
