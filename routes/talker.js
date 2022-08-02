const express = require('express');
const { authTalker } = require('../middlewares/authTalker');
const { validateName } = require('../middlewares/validateName');
const { validateAge } = require('../middlewares/validateAge');
const { validateTalk } = require('../middlewares/validateTalk');
const { validateWatchedAt } = require('../middlewares/validateWatchedAt');
const { validateRate } = require('../middlewares/validateRate');
const { createTalker } = require('../middlewares/createTalker');
const { editTalker } = require('../middlewares/editTalker');
const { deleteTalker } = require('../middlewares/deleteTalker');
const { searchByName } = require('../middlewares/searchByName');
const { getAllTalkers } = require('../middlewares/getAllTalkers');
const { getTalkerById } = require('../middlewares/getTalkerById');

const talker = express.Router();

talker.get('/', getAllTalkers);

talker.get('/search', authTalker, searchByName);

talker.get('/:id', getTalkerById);

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