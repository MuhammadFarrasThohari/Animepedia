import { Link } from "react-router-dom";

const AnimeCards = ({ title }) => {
    return (
        <div
            className="card m-2 p-1 flex-shrink-0"
            style={{ width: "300px", height: "500px" }}
        >
            <img
                src="https://placehold.co/300x300"
                alt="Anime Thumbnail"
                className="card-img-top"
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content. Some quick example text to build on the card
                    title and make up the bulk of the card's content. Some quick
                    example text to build on the card title and make up the bulk
                    of the card's content.
                </p>
                <Link to="#" className="btn btn-primary mt-auto">
                    Test
                </Link>
            </div>
        </div>
    );
};

export default AnimeCards;
