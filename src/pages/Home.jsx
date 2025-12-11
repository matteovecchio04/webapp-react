import axios from "axios"
import { useEffect, useState } from "react"



export default function Home() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000")
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return (
        <h2>Home</h2>
    )
}