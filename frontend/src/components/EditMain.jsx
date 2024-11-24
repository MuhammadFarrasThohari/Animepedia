import { useState } from "react";

const EditMain = () => {
    const [anime, setAnime] = useState("");
    console.log(anime);
    return (
        <main className="container">
            <h1>Edit</h1>
            <div className="">
                <form className="d-flex my-4 align-items-center">
                    <label
                        for="editAnime"
                        className="form-label form-label-large mx-2 fs-4 w-auto"
                        style={{ whiteSpace: "nowrap" }}
                    >
                        Judul Anime
                    </label>
                    <input
                        id="editAnime"
                        type="text"
                        className="form-control form-control-lg"
                        value={anime}
                        onChange={(e) => setAnime(e.target.value)}
                    />
                </form>
                <div className="dropDownSearch">
                    <h3>Hasil Pencarian</h3>
                    test
                </div>
            </div>
            <h2>Silahkan Cari Anime Yang Ingin di Edit</h2>
        </main>
    );
};

export default EditMain;
