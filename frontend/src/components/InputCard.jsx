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
                    src="https://placehold.co/350"
                    alt="anime"
                    className="rounded mx-3"
                    id="image"
                    style={{
                        maxWidth: "350px",
                        height: "auto",
                        objectFit: "cover",
                    }}
                    onClick={() => {
                        document.getElementById("fileInput").click();
                    }}
                />

                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={(event) => {
                        fileChange(event);
                    }}
                />
                <div className="inputContainer d-flex flex-column mx-3 justify-content-between">
                    <input
                        type="text"
                        className=" inputJudul"
                        placeholder="Enter anime title"
                    />
                    <textarea
                        type="text"
                        className=" inputDeskripsi my-2"
                        placeholder="Enter description"
                        rows={4}
                    />
                    <input
                        type="number"
                        className="inputEpisode"
                        placeholder="Episodes"
                        min={0}
                    />
                    <button
                        className="btn btn-primary mt-2"
                        onClick={() => postAnime()}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

function fileChange(event) {
    var image = document.getElementById("image");
    image.src = URL.createObjectURL(event.target.files[0]);
    image.onload = function () {
        URL.revokeObjectURL(image.src); // free memory
    };
}

async function postAnime() {
    const judul = document.querySelector(".inputJudul").value;
    const deskripsi = document.querySelector(".inputDeskripsi").value;
    const episode = document.querySelector(".inputEpisode").value;
    const image = document.getElementById("image").src;

    const json = {
        judul,
        deskripsi,
        episode,
        image,
    };

    console.log(json);

    // const response = await fetch("/api/anime", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         judul,
    //         deskripsi,
    //         episode,
    //         image,
    //     }),
    // });
    // const json = await response.json();
    // console.log(json);
}

export default InputCard;
