const express = require('express');
const router = express.Router();
const Axios = require("axios");

router.get('/', (req, res) => {
    const {query} = req.query;
    Axios
        .get(`https://api.mixcloud.com/search/?q=${query}&amp;type=cloudcast`)
        .then((response) => {
            res.send(response.data)
        })
        .catch((error) => {
            console.log(error)
        });
});

module.exports = router;