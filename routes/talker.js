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

talker.get('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const talkers = await readFile();
        const talkerByID = talkers.find((t) => t.id === Number(id));
        if (!talkerByID) {
            return res.status(404).json({ 
                message: 'Pessoa palestrante não encontrada',
            });
        }
        return res.status(200).json(talkerByID);
    } catch (error) {
        console.log(error);
    }
});

module.exports = talker;