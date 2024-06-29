import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import AnimeCards from "./AnimeCards";
import { useShowContext } from "../context/showContext";
import Details from "./Details";
import "../App.css";

const Main = () => {
    const { animeList, show, title } = useShowContext();

    return (
        <main className="container my-4">
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
            {show ? <Details title={title} /> : null}
        </main>
    );
};

export default Main;
