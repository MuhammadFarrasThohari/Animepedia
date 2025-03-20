import React from "react";

import "../styles/Input.css";
const InputCard = () => {
    function fileChange(event) {
        var image = document.getElementById("image");
        image.src = URL.createObjectURL(event.target.files[0]);
        image.onload = function () {
            URL.revokeObjectURL(image.src); // free memory
        };
    }

    function imageToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file); // Mengubah file menjadi Base64
        });
    }

    async function postAnime() {
        const judul = document.querySelector(".inputJudul").value;
        const deskripsi = document.querySelector(".inputDeskripsi").value;
        const jumlahEpisode = document.querySelector(".inputEpisode").value;
        const genre = document.querySelector(".genre").value;

        const fileInput = document.getElementById("fileInput");
        if (fileInput.files.length === 0) {
            alert("Please upload an image!");
            return;
        }

        // Konversi gambar menjadi Base64
        const gambar = await imageToBase64(fileInput.files[0]);

        const json = {
            judul,
            deskripsi,
            jumlahEpisode,
            gambar,
            genre,
        };

        console.log(json);

        // Uncomment untuk mengirim ke server
        const response = await fetch("/api/anime", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(json),
        });
        const result = await response.json();
        if (result.status === "success") {
            console.log("Anime added!");
        } else {
            console.log("Failed to add anime!");
        }
    }

    return (
        <div
            className="container-lg flex my-2 p-4 shadow-sm rounded"
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
                    multiple={false}
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
                    <select className="form-select my-2 genre">
                        <option value="1">Action</option>
                        <option value="2">Adventure</option>
                        <option value="3">Comedy</option>
                        <option value="4">Drama</option>
                    </select>
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

export default InputCard;
