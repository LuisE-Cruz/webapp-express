const express = require("express")
const router = express.Router()
const connection = require("../data/linkup")


router.get('/', (req, res) => {
    const mysql = 'SELECT * FROM movies';
    connection.query(mysql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json(results);
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const mysql = 'SELECT * FROM movies WHERE id = ?';

    connection.query(mysql, [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error" });
        }
        if (results.lenght === 0) {
            return res - status(404).json({ error: "Movie not found" });
        }
        res.json(results[0]);
    });
});

module.exports = router;