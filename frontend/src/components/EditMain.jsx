import { useState, useEffect } from "react";
import DropDownSearch from "./DropDownSearch";
import EditDetailsAnime from "./EditDetailsAnime";

const EditMain = () => {
    const [anime, setAnime] = useState("");
    const [debouncedAnime, setDebouncedAnime] = useState("");
    const [animeList, setAnimeList] = useState([]);
    const [show, setShow] = useState(false);
    const [animeDetails, setAnimeDetails] = useState({});
    // Menambahkan debouncing untuk mencegah terlalu banyak API request
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedAnime(anime);
        }, 500);

        return () => clearTimeout(timer);
    }, [anime]);

    // Memanggil API hanya ketika nilai debounced berubah
    useEffect(() => {
        if (debouncedAnime) {
            cariAnime();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedAnime]);

    useEffect(() => {
        if (!anime) {
            setAnimeList([]);
            console.log("Anime list reset");
        }
    }, [anime]);

    const cariAnime = async () => {
        try {
            const response = await fetch(
                `/api/anime/carijudul/${debouncedAnime}`
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const json = await response.json();
            console.log("anime:", json);
            setAnimeList(json.data);
        } catch (error) {
            console.error("Error fetching anime:", error);
        }
    };

    const animeDetailsHandler = (anime) => {
        setAnimeDetails(anime);
        console.log("Anime details:", anime);
        setShow(true);
    };

    return (
        <main className="container my-5">
            <div className="card shadow-lg border-0">
                <div className="card-header bg-primary text-white py-3">
                    <h1 className="mb-0">Edit Anime</h1>
                </div>
                <div className="card-body bg-light">
                    <div className="alert alert-info">
                        <i className="bi bi-info-circle-fill me-2"></i>
                        <h5 className="d-inline">
                            Silahkan Cari Anime Yang Ingin di Edit
                        </h5>
                    </div>

                    <form className="my-4">
                        <div className="mb-4">
                            <label
                                htmlFor="editAnime"
                                className="form-label form-label-large fs-4 mb-2 text-primary"
                            >
                                <i className="bi bi-search me-2"></i>
                                Judul Anime
                            </label>
                            <div className="position-relative">
                                <input
                                    id="editAnime"
                                    type="text"
                                    className="form-control form-control-lg shadow-sm border-primary"
                                    placeholder="Ketik judul anime..."
                                    value={anime}
                                    onChange={(e) => setAnime(e.target.value)}
                                />
                                {anime && (
                                    <div className="position-absolute w-100 z-index-1000">
                                        <DropDownSearch
                                            anime={animeList}
                                            selectedAnime={animeDetailsHandler}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>

                    {show && (
                        <div className="mt-4 animate__animated animate__fadeIn">
                            <h4 className="text-primary mb-3 border-bottom pb-2">
                                <i className="bi bi-pencil-square me-2"></i>
                                Detail Anime yang Akan Diedit
                            </h4>
                            <EditDetailsAnime details={animeDetails} />
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default EditMain;
