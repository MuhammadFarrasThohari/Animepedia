const EditDetailsAnime = ({ details }) => {
    const KonfirmasiEdit = () => {
        console.log("Konfirmasi Edit");
    };

    return (
        <div className="selectedAnime">
            <div className="d-flex">
                <img
                    src={details.gambar}
                    alt="anime"
                    style={{
                        height: "350px",
                        width: "auto",
                        objectFit: "cover",
                    }}
                />
                <form className="mx-4">
                    <div className="mb-3">
                        <label
                            htmlFor="judul"
                            className="form-label form-label-large"
                        >
                            Judul
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="judul"
                            value={details.judul}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="genre"
                            className="form-label form-label-large"
                        >
                            Genre
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="genre"
                            value={details.genre}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="jumlahEpisode"
                            className="form-label form-label-large"
                        >
                            Jumlah Episode
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="jumlahEpisode"
                            value={details.jumlahEpisode}
                        />
                    </div>
                </form>
            </div>
            <button type="button" className="btn btn-primary my-4">
                Konfirmasi Edit
            </button>
        </div>
    );
};

export default EditDetailsAnime;
