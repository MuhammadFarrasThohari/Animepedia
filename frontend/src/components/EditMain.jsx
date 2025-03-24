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
            setAnimeList(json);
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
                            {anime && (
                                <DropDownSearch
                                    anime={animeList}
                                    selectedAnime={animeDetailsHandler}
                                />
                            )}
                        </div>
                    </div>
                </form>
                {show && <EditDetailsAnime details={animeDetails} />}
            </div>
        </main>
    );
};

export default EditMain;
