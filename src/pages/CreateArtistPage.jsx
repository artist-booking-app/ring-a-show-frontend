import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CreateArtistPage () {

const API_URL = import.meta.env.VITE_API_URL

const [artistName, setArtistName] = useState("")
const [typeOfPerformance, setTypeOfPerformance] = useState([])
const [genre, setGenre] = useState("")
const [cityLocation, setCityLocation] = useState("")

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
        <main className="form-container-create-artist">
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
                Type of Performance
              <select
                name="typeOfPerformance"
                required={true}
                value={typeOfPerformance}
                onChange={(e) => setTypeOfPerformance(e.target.value)}
              >
                <option disabled select value="">
                  {" "}
                  Select
                </option>
                <option value="Music">Music</option>
                <option value="Comedy">Comedy</option>
                <option value="Dance">Dance</option>
                <option value="Theatre">Theatre</option>
                <option value="Magic">Magic</option>
                <option value="Circus">Circus</option>
                <option value="Multidisciplinary">Multidisciplinary</option>
                <option value="Performance Art">Performance Art</option>
              </select>
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
                  City Location:
                  <select
                      type="option"
                      name="city location"
                      required={true}
                      value={cityLocation}
                      onChange={(e) => setCityLocation(e.target.value)}
                  >
                      <option disabled select value="">
                          {" "}
                          Select
                      </option>
                      <option value="Amsterdam">Amsterdam</option>
                      <option value="Berlin">Berlin</option>

                  </select>
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

            <button>Create Artist</button>

        </form>

        </main>

        </>

    )

}

export default CreateArtistPage