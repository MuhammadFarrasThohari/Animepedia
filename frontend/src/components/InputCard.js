const InputCard = () => {
    return (
        <div
            className="container flex my-2 p-4 shadow-sm rounded"
            style={{ backgroundColor: "#f9f9f9" }}
        >
            <h2 className="mb-4">Input Anime</h2>

            <div className="bigWrap d-flex">
                <img
                    src="https://via.placeholder.com/350"
                    alt="anime"
                    className="rounded mr-3"
                    style={{
                        maxWidth: "350px",
                        height: "auto",
                        objectFit: "cover",
                    }}
                />
                <div className="inputContainer d-flex flex-column ml-3">
                    <input
                        type="text"
                        className="form-control mb-3 rounded"
                        placeholder="Enter anime title"
                    />
                    <textarea
                        type="text"
                        className="form-control mb-3 rounded"
                        rows={3}
                        placeholder="Enter description"
                    />
                    <input
                        type="number"
                        className="form-control mb-3 rounded"
                        placeholder="Enter rating"
                    />
                </div>
            </div>
        </div>
    );
};

export default InputCard;
