const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

router.use((req, res, next) => {
    res.status(404).send("Página no encontrada");
});

module.exports = router;