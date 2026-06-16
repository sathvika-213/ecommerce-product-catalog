const express = require("express");
const router = express.Router();

const {
    getAllProducts,
    searchProducts,
    addProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

// SEARCH
router.get("/search", searchProducts);

// GET ALL
router.get("/", getAllProducts);

// ADD
router.post("/", addProduct);

// UPDATE
router.put("/:id", updateProduct);

// DELETE
router.delete("/:id", deleteProduct);

module.exports = router;