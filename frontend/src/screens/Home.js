import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import AnimeCards from "../components/AnimeCards";

// import { useState } from "react";

const Home = () => {
    // Contoh data anime (dapat diganti dengan data sesuai kebutuhan)
    const animeList = [
        { id: 1, title: "Anime 1" },
        { id: 2, title: "Anime 2" },
        { id: 3, title: "Anime 3" },
        { id: 4, title: "Anime 4" },
        { id: 5, title: "Anime 5" },
        { id: 6, title: "Anime 6" },
        { id: 7, title: "Anime 7" },
    ];

    return (
        <>
            <h1>Animepedia</h1>
            <div className="container">
                <h2>Anime List</h2>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={3}
                    slidesPerView={4}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                >
                    {animeList.map((anime) => (
                        <SwiperSlide key={anime.id}>
                            <AnimeCards title={anime.title} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Home;
