import axios from "axios"
import { Link } from "react-router-dom"
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
            <div className="row">
                {
                    movies.map(movie => {
                        return (
                            <div key={movie.id} className="col-12 col-md-6 col-lg-4">
                                <Link to={`/${movie.id}`}>
                                    <div className="card">
                                        <h1 className="text-center">{movie.title}</h1>
                                        <img src={`http://localhost:3000/images/${movie.image}`} className="card-img-top" alt={movie.title} />
                                        <div className="card-body">
                                            <p className="card-text">{movie.abstract}</p>
                                        </div>
                                    </div>
                                </Link>

                            </div>

                        )
                    })
                }
            </div>

        </>
    )
}