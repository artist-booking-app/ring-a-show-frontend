import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../context/auth.context"

function EditBookingDetailsPage () {

    const API_URL = import.meta.env.VITE_API_URL

    const { bookingId } = useParams()

    const [artistName, setArtistName] = useState("")

    const [performanceName, setPerformanceName] = useState("")
    const [date, setDate] = useState("")
    const [address, setAddress] = useState("")
    const [typeOfLocation, setTypeOfLocation] = useState([])
    const [isIndoor, setIsIndoor] = useState(true)

    const navigate = useNavigate()

    const getBookingDetails = () => {
    axios.get(`${API_URL}/api/bookings/${bookingId}`)
    .then((response) => {
        setArtistName(response.data.artistName)
        setPerformanceName(response.data.performanceName)
        setDate(response.data.date)
        setAddress(response.data.location.address)
        setTypeOfLocation(response.data.location.typeOfLocation)
        setIsIndoor(response.data.location.isIndoor)
    })
    .catch((error) => {
        console.log(error)
    })
}

useEffect(() => {
    getBookingDetails()
}, [bookingId])

const handleFormSubmit = (e) => {
    e.preventDefault()

    const requestBody = {
  
        artistName,

        performanceName,
   
        date,
        location: {
            address,
            typeOfLocation,
            isIndoor
        }
    }

    axios.put(`${API_URL}/api/bookings/${bookingId}`, requestBody)
    .then((response) => {
        navigate(`/bookings/${bookingId}`)
    })
    .catch((error) => {
        console.log(error)
    })
}

    return(
        <>
        <main className="form-container">
        <h1>Booking Details</h1>

        <form onSubmit={handleFormSubmit}>

            <label>
                Artist Name:
                <input
                    type="text"
                    name="artist name"
                    required={true}
                    value={artistName}
                    onChange={(e) => {setArtistName(e.target.value)}}
                    />
            </label>

            <label>
                Performance Name:
                <input
                    type="text"
                    name="performance name"
                    required={true}
                    value={performanceName}
                    onChange={(e) => {setPerformanceName(e.target.value)}}
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
                Address:
                <input
                    type="text"
                    name="name"
                    required={true}
                    value={address}
                    onChange={(e) => {setAddress(e.target.value)}}
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

              <label>Indoor?
              <label>
                  <input
                      type="radio"
                      name="indoor"
                      value="true"
                      checked={isIndoor === true}
                      onChange={() => setIsIndoor(true)}
                  />
                  Yes
              </label>
              
              <label>
                  <input
                      type="radio"
                      name="outdoor"
                      value="false"
                      checked={isIndoor === false}
                      onChange={() => setIsIndoor(false)}
                  />
                  No
              </label>
              </label>

            <button>Confirm changes</button>

        </form>
        </main>
        </>
    )
}

export default EditBookingDetailsPage