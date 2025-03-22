import { useState, useEffect } from "react";
import DropDownSearch from "./DropDownSearch";

const EditMain = () => {
    const [anime, setAnime] = useState("");
    const [debouncedAnime, setDebouncedAnime] = useState("");
    const [animeList, setAnimeList] = useState([]);

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
            setAnimeList(json);
        } catch (error) {
            console.error("Error fetching anime:", error);
        }
    };

    return (
        <main className="container my-4">
            <h1>Edit</h1>
            <h2>Silahkan Cari Anime Yang Ingin di Edit</h2>
            <div className="">
                <form className="my-4 align-items-center">
                    <div className="">
                        <label
                            htmlFor="editAnime"
                            className="form-label form-label-large mx-2 fs-4 w-auto"
                            style={{ whiteSpace: "nowrap" }}
                        >
                            Judul Anime
                        </label>
                        <div className="d-flex flex-column">
                            <input
                                id="editAnime"
                                type="text"
                                className="form-control form-control-lg"
                                value={anime}
                                onChange={(e) => setAnime(e.target.value)}
                            />
                            {anime && <DropDownSearch anime={animeList} />}
                        </div>
                    </div>
                </form>
                <div className="selectedAnime">
                    <div className="d-flex">
                        <img src="https://placehold.co/300" alt="anime" />
                        <div className="animeDetails mx-4">
                            <h3>Judul Anime</h3>
                            <p>Genre</p>
                            <p>Rating</p>
                            <p>Deskripsi</p>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary my-4">
                        Konfirmasi Edit
                    </button>
                </div>
            </div>
        </main>
    );
};

export default EditMain;
