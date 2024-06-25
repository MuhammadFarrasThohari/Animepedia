const Anime = require("../models/AnimeModel");

// Get all anime
async function getAllAnime(req, res) {
    try {
        const anime = await Anime.find();
        res.status(200).json(anime);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
// Post an anime
async function postAnime(req, res) {
    try {
        const { judul, genre, jumlahEpisode } = req.body;
        const anime = await Anime.create({
            judul,
            genre,
            jumlahEpisode,
        });
        res.status(200).json(anime);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
// Delete an anime by ID
async function deleteAnime(req, res) {
    try {
        const anime = await Anime.findByIdAndDelete(req.params.id);
        res.status(200).json(anime);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Get an anime by ID
async function getAnimeById(req, res) {
    try {
        const anime = await Anime.findById(req.params.id);
        res.status(200).json(anime);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = { getAllAnime, postAnime, deleteAnime, getAnimeById };
