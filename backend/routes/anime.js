const express = require("express");
const Anime = require("../models/AnimeModel");
const {
    getAllAnime,
    postAnime,
    deleteAnime,
    getAnimeById,
    getAnimeByName,
} = require("../controller/AnimeController");
const router = express.Router();

router.get("/", getAllAnime);

router.post("/", postAnime);

router.get("/:id", getAnimeById);

router.delete("/:id", deleteAnime);

router.get("/carijudul/:judul", getAnimeByName);

module.exports = router;
