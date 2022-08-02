const fs = require('fs/promises');
const { readFile } = require('./readFile');

const editTalker = async (req, res) => {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const { watchedAt, rate } = talk;
    const talkers = await readFile();

    const talkerIndex = talkers.findIndex((t) => t.id === Number(id));

    if (talkerIndex === -1) {
        return res.status(200).json({
            message: 'Usuário não encontrado',
        });
    }

    talkers[talkerIndex] = { ...talkers[talkerIndex], name, age, talk: { watchedAt, rate } };
    await fs.writeFile('./talker.json', JSON.stringify(talkers, null, 2));
    return res.status(200).json(talkers[talkerIndex]);
};

module.exports = { editTalker };