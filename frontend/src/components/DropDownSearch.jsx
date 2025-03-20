const DropDownSearch = ({ anime }) => {
    return (
        <div className="dropDownSearch w-100">
            <ul className="list-group">
                {anime.map((anime) => (
                    <li
                        key={anime._id}
                        className="list-group-item"
                        style={{ cursor: "pointer" }}
                    >
                        <div className="d-flex align-items-center">
                            <img
                                src="https://placehold.co/75"
                                alt="anime"
                                className="rounded"
                                style={{
                                    objectFit: "cover",
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
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropDownSearch;
