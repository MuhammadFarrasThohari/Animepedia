import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import AnimeCards from "./AnimeCards";

//import useEffect
import { useEffect, useState } from "react";

const Header = () => {
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        async function fetchAnime() {
            const response = await fetch("/api/anime");
            const json = await response.json();
            console.log(json);
            setAnimeList(json);
        }
        fetchAnime();
    }, []);

    return (
        <header>
            <h1>Animepedia</h1>
            <div className="container">
                <h2>Anime List</h2>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={3}
                    slidesPerView={4}
                    navigation
                >
                    {animeList.map((anime) => (
                        <SwiperSlide key={anime._id}>
                            <AnimeCards title={anime.judul} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </header>
    );
};

export default Header;
