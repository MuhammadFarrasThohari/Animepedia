const mongoose = require("mongoose");

const Anime = new mongoose.Schema({
    judul: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    jumlahEpisode: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Anime", Anime);
