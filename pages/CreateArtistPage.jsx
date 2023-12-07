import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CreateArtistPage () {

const API_URL = import.meta.env.VITE_API_URL

const [artistName, setArtistName] = useState("")
const [typeOfPerformance, setTypeOfPerformance] = useState("")
const [genre, setGenre] = useState("")
const [cityLocation, setCityLocation] = useState("")
const [performancesAvailable, setPerformancesAvailable] = useState(1)
const [biography, setBiography] = useState("")
const [showreel, setShowreel] = useState("")
const [image, setImage] = useState("")

const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()

    const requestBody = {
        artistName,
        typeOfPerformance,
        genre,
        cityLocation,
        performancesAvailable,
        about: {
            biography,
            showreel,
        },
        imagePath: image
        }

        axios.post(API_URL + "/api/artists", requestBody)
            .then((response) => {
                navigate("/artists")
            })
            .catch((error) => {
                console.log(error)
            })
            console.log(requestBody)
    }

    return (
        <>
        <h1>Create Artist</h1>

        <form onSubmit={handleSubmit}>

            <label>
                Artist name:
                <input
                type="text"
                name="artist name"
                required={true}
                value={artistName}
                onChange={(e) => {setArtistName(e.target.value)}}
                />
            </label>
            <label>
                Type of Performance:
                <input
                type="text"
                name="type of performance"
                required={true}
                value={typeOfPerformance}
                onChange={(e) => {setTypeOfPerformance(e.target.value)}}
                />
            </label>
            <label>
                Genre:
                <input
                type="text"
                name="genre"
                required={true}
                value={genre}
                onChange={(e) => {setGenre(e.target.value)}}
                />
            </label>
            <label>
                Location (city):
                <input
                type="text"
                name="location"
                required={true}
                value={cityLocation}
                onChange={(e) => {setCityLocation(e.target.value)}}
                />
            </label>
            <label>
                Performances available:
                <input
                type="number"
                name="performances"
                required={true}
                value={performancesAvailable}
                onChange={(e) => {setPerformancesAvailable(e.target.value)}}
                />
            </label>
            <label>
                Biography:
                <input
                type="text"
                name="biography"
                required={true}
                value={biography}
                onChange={(e) => {setBiography(e.target.value)}}
                />
            </label>
            <label>
                Showreel:
                <input
                type="text"
                name="showreel"
                required={true}
                value={showreel}
                onChange={(e) => {setShowreel(e.target.value)}}
                />
            </label>
            <label>
                Image:
                <input
                type="text"
                name="image"
                required={true}
                value={image}
                onChange={(e) => {setImage(e.target.value)}}
                />
            </label>

            <button>Submit</button>

        </form>

        </>

    )

}

export default CreateArtistPage