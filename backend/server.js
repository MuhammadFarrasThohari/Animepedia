// Import dotenv
require("dotenv").config();

// Import mongoose
const mongoose = require("mongoose");

// Import express
const express = require("express");
const animeRoutes = require("./routes/anime"); // Koreksi penulisan variabel

// Membuat express app
const app = express();

// Koneksi ke mongodb dan memulai server
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to database");
        // Listening request
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`); // Gunakan port dari .env
        });
    })
    .catch(async (err) => {
        console.log(err);
        await mongoose.disconnect();
    });

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use(express.json({ limit: "10mb" }));

// Handling request
app.use("/api/anime", animeRoutes);
