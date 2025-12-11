import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function MovieDetails() {
    const [movie, setMovie] = useState([])

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(res => {
                setMovie(res.data)
                console.log(res.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return (
        <>
            <div>{movie.title}</div>
            <div>{movie.director}</div>
            <div>{movie.genre}</div>
            <img src={`http://localhost:3000/images/${movie.image}`} alt={movie.title} />
            <div>{movie.abstract}</div>
        </>

    )
}