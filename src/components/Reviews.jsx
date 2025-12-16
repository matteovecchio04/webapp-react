export default function Reviews({ movie }) {
    return (
        <>
            <h1>Reviews</h1>

            {
                movie && movie.reviews?.map(review => (
                    <div key={review.id} className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <h3 className="text-center">{review.name}</h3>
                            <div className="card-body">
                                <p className="card-text">{review.vote}</p>
                                <p className="card-text">{review.text}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    )
}