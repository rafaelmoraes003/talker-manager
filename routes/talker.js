const express = require('express');
const { readFile } = require('../helpers/readFile');

const talker = express.Router();

talker.get('/', async (req, res) => {
    try {
        const talkers = await readFile();
        return res.status(200).json(talkers);
    } catch (error) {
        console.log(error);
        return res.status(200).json([]);
    }
});

module.exports = talker;