import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import AnimeCards from "./AnimeCards";

//import useEffect
import { useShowContext } from "../context/showContext";
const Header = () => {
    const { animeList } = useShowContext();

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
