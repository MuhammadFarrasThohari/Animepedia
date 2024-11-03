const Details = ({ animeDetails }) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={animeDetails.gambar}
                        className="img-fluid"
                        alt="Anime 1"
                    />
                </div>
                <div className="col-md-8">
                    <div className="container">
                        <h1 className="my-4">{animeDetails.judul}</h1>
                        <h2>{animeDetails.deskripsi}</h2>
                        <p>{animeDetails.jumlahEpisode}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
