import { useState, useEffect } from "react";

const EditDetailsAnime = ({ details }) => {
    const [judul, setJudul] = useState(details.judul);
    const [genre, setGenre] = useState(details.genre);
    const [jumlahEpisode, setJumlahEpisode] = useState(details.jumlahEpisode);
    const [gambar, setGambar] = useState(details.gambar);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setJudul(details.judul);
        setGenre(details.genre);
        setJumlahEpisode(details.jumlahEpisode);
        setGambar(details.gambar);
    }, [details]); // Memantau perubahan pada details

    const KonfirmasiEdit = async () => {
        setIsLoading(true);
        const data = {
            judul,
            genre,
            jumlahEpisode,
            gambar,
        };

        const request = await fetch(`/api/anime/${details._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await request.json();
        if (result.status === "success") {
            console.log("Anime updated!");
        } else {
            console.log("Failed to update");
        }
        setIsLoading(false);
    };

    return (
        <div className="selectedAnime">
            <div className="d-flex">
                <img
                    src={gambar}
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
                            value={judul}
                            onChange={(e) => setJudul(e.target.value)}
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
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
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
                            value={jumlahEpisode}
                            onChange={(e) => setJumlahEpisode(e.target.value)}
                        />
                    </div>
                </form>
            </div>
            <button
                type="button"
                className="btn btn-primary my-4"
                onClick={KonfirmasiEdit}
                style={
                    isLoading
                        ? { cursor: "not-allowed" }
                        : { cursor: "pointer" }
                }
                disabled={isLoading}
            >
                Konfirmasi Edit
            </button>
        </div>
    );
};

export default EditDetailsAnime;
