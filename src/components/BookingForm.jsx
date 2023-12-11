import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";

function BookingForm({ performanceId, artistId, API_URL }) {


    const [address, setAddress] = useState("")
    const [typeOfLocation, setTypeOfLocation] = useState("")
    const [indoor, setIndoor] = useState(true)
    const [date, setDate] = useState("")
    const {user} = useContext(AuthContext)

    const bookNowHandler = (e) => {
        e.preventDefault()

        const requestBody = {
            artistRef: artistId,
            performanceRef: performanceId,
            userRef: user._id,
            date,
            location: {
                address,
                typeOfLocation,
                indoor
            }
        }

        // console.log(requestBody)

        axios.post(API_URL + "/api/bookings", requestBody)
            .then((response) => {
                console.log(response + "Booking was successful")
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        
        
    }

    return (
        <>
            <h1>Booking page</h1>

            <form onSubmit={bookNowHandler}>

                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        required={true}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </label>

                <label>
                    Date:
                    <input
                        type="datetime-local"
                        name="datetime"
                        required={true}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>                

                <label>
                    Type of Location:
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
                </label>

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
                </label>
                <label>
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

    )
}

export default BookingForm