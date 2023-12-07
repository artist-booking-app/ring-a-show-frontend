import axios from "axios"
import { useEffect, useState } from "react"

function FavouritesPage(props) {
    return(
        <>
        <h1>Favourites page</h1>

        {props.favouritesArtists.map((elm) => {
            return(
                <>
                <h1>{elm.artistName}</h1>
                <h2>{elm.genre}</h2>
                <h2>{elm.cityLocation}</h2>
                </>
            )
        })}
        </>
    )
}

export default FavouritesPage