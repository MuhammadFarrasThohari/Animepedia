const Details = ({ animeDetails }) => {
    return (
        <div className="container my-5">
            <div className="row bg-light shadow rounded p-4">
                <div className="col-md-4">
                    <img
                        src={animeDetails.gambar}
                        className="img-fluid rounded shadow"
                        alt={animeDetails.judul}
                    />
                </div>
                <div className="col-md-8">
                    <h1 className="my-4 border-bottom pb-2">
                        {animeDetails.judul}
                    </h1>
                    <p className="fs-4 text-secondary">
                        {animeDetails.deskripsi}
                    </p>
                    <div className="d-flex flex-wrap justify-content-between mt-4">
                        <div className="badge bg-info text-dark fs-6 p-2 mb-2">
                            <i className="bi bi-collection-play me-2"></i>
                            Jumlah Episode: {animeDetails.jumlahEpisode}
                        </div>
                        <div className="badge bg-warning text-dark fs-6 p-2 mb-2">
                            <i className="bi bi-tags me-2"></i>
                            Genre: {animeDetails.genre}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
