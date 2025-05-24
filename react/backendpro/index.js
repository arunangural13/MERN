require("dotenv").config();
const cors = require('cors');
const express = require("express");
const app = express();
const port = process.env.PORT || 2000; 
const path = require("path");
const db = require("./server/config/db");
db();
const { seedAdmin } = require("./server/config/seed");
seedAdmin();
const router = require("./server/routes/route");

// --- Add CORS middleware here ---
app.use(cors({
    origin: 'http://localhost:5173',  // React app ka origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use("/upload", express.static(path.join(__dirname, "server", "public", "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

app.listen(port, () => {
    console.log(`server is running at port number http://localhost:${port}`);
});
