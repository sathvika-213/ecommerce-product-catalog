const db = require("../config/db");

// GET ALL PRODUCTS
const getAllProducts = (req, res) => {
    const sql = "SELECT * FROM products";

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

// SEARCH PRODUCTS
const searchProducts = (req, res) => {
    const name = req.query.name;

    const sql = "SELECT * FROM products WHERE name LIKE ?";

    db.query(sql, [`%${name}%`], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

// ADD PRODUCT
const addProduct = (req, res) => {
    const { name, description, price, category, stock } = req.body;

    const sql = `
        INSERT INTO products
        (name, description, price, category, stock)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, description, price, category, stock],
        (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Product Added Successfully"
            });
        }
    );
};

// UPDATE PRODUCT
const updateProduct = (req, res) => {
    const id = req.params.id;

    const { name, description, price, category, stock } = req.body;

    const sql = `
        UPDATE products
        SET name=?, description=?, price=?, category=?, stock=?
        WHERE id=?
    `;

    db.query(
        sql,
        [name, description, price, category, stock, id],
        (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Product Updated Successfully"
            });
        }
    );
};

// DELETE PRODUCT
const deleteProduct = (req, res) => {
    const id = req.params.id;

    const sql = "DELETE FROM products WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Product Deleted Successfully"
        });
    });
};

module.exports = {
    getAllProducts,
    searchProducts,
    addProduct,
    updateProduct,
    deleteProduct
};