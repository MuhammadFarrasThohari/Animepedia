import { useShowContext } from "../context/showContext";

const AnimeCards = ({ anime }) => {
    const { setShow } = useShowContext();
    const { setAnimeDetails } = useShowContext();
    const handleClick = () => {
        setShow(true);
        setAnimeDetails(anime);
    };
    return (
        <div className="card mx-2">
            <img
                src={anime.gambar}
                alt="Anime Thumbnail"
                className="card-img-top"
                style={{ height: "350px" }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate">{anime.judul}</h5>
                <p
                    className="card-text"
                    style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        height: "auto",
                    }}
                >
                    {anime.deskripsi}
                </p>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        handleClick();
                    }}
                >
                    Tampilkan Detail
                </button>
            </div>
        </div>
    );
};

export default AnimeCards;
