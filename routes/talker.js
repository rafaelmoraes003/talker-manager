const express = require('express');
const { readFile } = require('../middlewares/readFile');
const { authTalker } = require('../middlewares/authTalker');
const { validateName } = require('../middlewares/validateName');
const { validateAge } = require('../middlewares/validateAge');
const { validateTalk } = require('../middlewares/validateTalk');
const { validateWatchedAt } = require('../middlewares/validateWatchedAt');
const { validateRate } = require('../middlewares/validateRate');
const { createTalker } = require('../middlewares/createTalker');
const { editTalker } = require('../middlewares/editTalker');
const { deleteTalker } = require('../middlewares/deleteTalker');

const talker = express.Router();

talker.get('/', async (_req, res) => {
    const talkers = await readFile();
    return res.status(200).json(talkers);
});

talker.get('/:id', async (req, res) => {
    const { id } = req.params;
    const talkers = await readFile();
    const talkerByID = talkers.find((t) => t.id === Number(id));
    if (!talkerByID) {
        return res.status(404).json({ 
            message: 'Pessoa palestrante não encontrada',
        });
    }
    return res.status(200).json(talkerByID);
});

talker.use(authTalker);

talker.delete('/:id', deleteTalker);

talker.use( 
    validateName, 
    validateAge, 
    validateTalk,
    validateWatchedAt,
    validateRate,
);

talker.post('/', createTalker);

talker.put('/:id', editTalker);

module.exports = talker;