import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/movies")
            .then(res => {
                setMovies(res.data)
                console.log(res.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return (
        <>
            <h1>Home</h1>
            {
                movies.map(movie => {
                    return (
                        <div key={movie.id} className="card">
                            <h1>{movie.title}</h1>
                            <img src={movie.image} className="card-img-top" alt={movie.title} />
                            <div className="card-body">
                                <p className="card-text">{movie.abstract}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}