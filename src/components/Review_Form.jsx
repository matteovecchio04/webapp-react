import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function Review_Form({ refresh }) {

    const formBlank = {
        name: "",
        vote: "",
        text: ""
    }

    const [formData, setFormData] = useState(formBlank)
    const { id } = useParams()

    function handleFormSubmit(e) {
        e.preventDefault()

        axios.post(`http://localhost:3000/movies/${id}/reviews`, formData)
            .then(() => {
                setFormData(formBlank)
            })
            .catch(err => {
                console.error(err)
            })
            .finally(() => {
                refresh()
            })
    }

    return (
        <>
            <h1>review form</h1>

            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} type="name" className="form-control" id="name" placeholder="John Smith" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Write your review !</label>
                    <textarea onChange={(e) => setFormData({ ...formData, text: e.target.value })} value={formData.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <select onChange={(e) => setFormData({ ...formData, vote: e.target.value })} value={formData.vote} className="form-select" aria-label="Default select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </>
    )
}