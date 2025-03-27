import { motion, AnimatePresence, easeIn } from "framer-motion";
import AnimeCards from "./AnimeCards";
import Details from "./Details";
import { useShowContext } from "../context/showContext";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
    const [animeList, setAnimeList] = useState([]);
    const { animeDetails, show } = useShowContext();

    useEffect(() => {
        async function fetchAnime() {
            const response = await fetch("/api/anime");
            const json = await response.json();

            if (json.status === "success") {
                setAnimeList(json.data);
                console.log(json.data);
            } else {
                console.error("Gagal mengambil data:", json.error);
            }
        }
        fetchAnime();
    }, []);

    const settings = {
        variableWidth: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 500,
        slidesToShow: Math.min(5, animeList.length),
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <main className="container my-4">
            <h2>Anime List</h2>
            <Slider {...settings} >
                {animeList.map((anime) => (
                    <AnimeCards key={anime._id} anime={anime}  />
                ))}
            </Slider>
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
