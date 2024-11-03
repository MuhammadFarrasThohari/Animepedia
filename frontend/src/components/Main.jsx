import { motion, AnimatePresence } from "framer-motion";
import AnimeCards from "./AnimeCards";
import Details from "./Details";
import { useShowContext } from "../context/showContext";

const Main = () => {
    const { animeList, animeDetails, show } = useShowContext();

    return (
        <main className="container my-4">
            <div className="container">
                <h2>Anime List</h2>
                <div className="swiper-container">
                    {animeList.map((anime) => (
                        <AnimeCards key={anime._id} anime={anime} />
                    ))}
                </div>
            </div>
            <AnimatePresence>
                {show && (
                    <motion.div
                        key={animeDetails ? animeDetails._id : "empty"}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Details animeDetails={animeDetails} />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default Main;
