import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import AnimeCards from "./AnimeCards";
import { useShowContext } from "../context/showContext";
import Details from "./Details";
import { CSSTransition } from "react-transition-group";
import "../App.css";
import { useRef } from "react";
const Main = () => {
    const { animeList, animeDetails, show } = useShowContext();
    const nodeRef = useRef(null);
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
                            <AnimeCards anime={anime} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <CSSTransition
                in={show}
                nodeRef={nodeRef}
                timeout={300}
                classNames="details"
                unmountOnExit
            >
                <div ref={nodeRef}>
                    <Details title={animeDetails.judul} />
                </div>
            </CSSTransition>
        </main>
    );
};

export default Main;
