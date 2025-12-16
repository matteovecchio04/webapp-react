import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Reviews from "../components/Reviews"
import Review_Form from "../components/Review_Form"

export default function MovieDetails() {
    const [movie, setMovie] = useState({})
    const { id } = useParams()

    function getSingleMovie() {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(res => {
                setMovie(res.data)
                console.log(res.data);
            })
            .catch(error => {
                console.error(error);
            })
    }

    useEffect(getSingleMovie, [])

    return (
        <>
            <div>{movie.title}</div>
            <div>{movie.director}</div>
            <div>{movie.genre}</div>
            <img src={`http://localhost:3000/images/${movie.image}`} alt={movie.title} />
            <div>{movie.abstract}</div>
            <Reviews movie={movie} />
            <Review_Form refresh={getSingleMovie} />
        </>
    )
}