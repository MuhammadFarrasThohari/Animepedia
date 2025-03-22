import { motion } from "framer-motion";

const DropDownSearch = ({ anime }) => {
    return (
        <div className="dropDownSearch w-100">
            <ul className="list-group">
                {anime.map((anime) => (
                    <motion.li
                        key={anime._id}
                        className="list-group-item"
                        style={{ cursor: "pointer" }}
                        whileHover={{ backgroundColor: "#f8f9fa" }}
                    >
                        <div className="d-flex align-items-center">
                            <img
                                src={anime.gambar}
                                alt="anime"
                                className="rounded"
                                style={{
                                    objectFit: "cover",
                                    height: "75px",
                                    width: "75px",
                                }}
                            ></img>
                            <div className="d-flex flex-column mx-3">
                                <span className="fs-5 fw-bold">
                                    {anime.judul}
                                </span>
                                <span className="fs-6 fw-light">
                                    {anime.genre}
                                </span>
                            </div>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default DropDownSearch;
