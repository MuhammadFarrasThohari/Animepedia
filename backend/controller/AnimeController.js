const Anime = require("../models/AnimeModel");

// Get all anime
async function getAllAnime(req, res) {
    try {
        const anime = await Anime.find(); // Ambil data dari database
        res.status(200).json({
            status: "success",
            data: anime, // Tambahkan data hasil query ke dalam response
        });
    } catch (err) {
        res.status(400).json({ status: "error", error: err.message });
    }
}

// Post an anime
async function postAnime(req, res) {
    try {
        const { judul, genre, jumlahEpisode, deskripsi, gambar } = req.body;
        const anime = await Anime.create({
            judul,
            genre,
            jumlahEpisode,
            deskripsi,
            gambar,
        });
        res.status(200).json({ status: "success", data: anime });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
// Delete an anime by ID
async function deleteAnime(req, res) {
    try {
        const anime = await Anime.findByIdAndDelete(req.params.id);
        res.status(200).json({ status: "success", data: anime });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Get an anime by ID
async function getAnimeById(req, res) {
    try {
        const anime = await Anime.findById(req.params.id);
        res.status(200).json({ status: "success", data: anime });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Get an anime by name
async function getAnimeByName(req, res) {
    try {
        // Membuat regex berdasarkan parameter judul, dengan case-insensitive
        const searchPattern = new RegExp(req.params.judul, "i");

        // Query menggunakan regex
        const anime = await Anime.find({ judul: { $regex: searchPattern } });

        res.status(200).json({ status: "success", data: anime });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Update an anime by ID
async function updateAnime(req, res) {
    try {
        const anime = await Anime.findByIdAndUpdate(req.params.id, req.body);
        console.log(anime);
        res.status(200).json({ status: "success", data: anime });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
    getAllAnime,
    postAnime,
    deleteAnime,
    getAnimeById,
    getAnimeByName,
    updateAnime,
};
