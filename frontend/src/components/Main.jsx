import { motion, AnimatePresence, easeIn } from "framer-motion";
import AnimeCards from "./AnimeCards";
import Details from "./Details";
import { useShowContext } from "../context/showContext";
import { useEffect, useState } from "react";
const Main = () => {
    const [animeList, setAnimeList] = useState([]);
    const { animeDetails, show } = useShowContext();

    useEffect(() => {
        async function fetchAnime() {
            const response = await fetch("/api/anime");
            const json = await response.json();

            if (json.status === "success") {
                setAnimeList(json.data); // Simpan hanya data anime
                console.log(json.data);
            } else {
                console.error("Gagal mengambil data:", json.error);
            }
        }
        fetchAnime();
    }, []);
    return (
        <main className="container my-4">
            <div className="">
                <h2>Anime List</h2>
                <div className="d-flex">
                    {animeList.map((anime) => (
                        <AnimeCards key={anime._id} anime={anime} />
                    ))}
                </div>
            </div>
            <AnimatePresence mode="wait">
                {show && animeDetails && (
                    <motion.div
                        key={animeDetails._id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: easeIn }}
                        className="position-relative"
                    >
                        <Details animeDetails={animeDetails} />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default Main;
