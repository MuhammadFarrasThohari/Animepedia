const mongoose = require("mongoose");

const Animasi = new mongoose.Schema({
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
    deskripsi: {
        type: String,
        required: true,
    },
    gambar: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Animasi", Animasi);
