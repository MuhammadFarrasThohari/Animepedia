import React from "react";

import "../styles/Input.css";
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
                    className="rounded mx-3"
                    style={{
                        maxWidth: "350px",
                        height: "auto",
                        objectFit: "cover",
                    }}
                    onClick={() => console.log("Image clicked")}
                />
                <div className="inputContainer d-flex flex-column mx-3 justify-content-between">
                    <input
                        type="text"
                        className=" inputJudul"
                        placeholder="Enter anime title"
                    />
                    <textarea
                        type="text"
                        className=" inputDeskripsi"
                        placeholder="Enter description"
                        rows={4}
                    />
                    <input
                        type="number"
                        className="inputEpisode"
                        placeholder="Episodes"
                        min={0}
                    />
                </div>
            </div>
        </div>
    );
};

export default InputCard;
