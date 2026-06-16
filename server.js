const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Database Connection
require("./config/db");

// Routes
const productRoutes = require("./routes/productRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("E-Commerce Product Catalog API Running");
});

// Product Routes
app.use("/api/products", productRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});