const fs = require('fs/promises');
const { readFile } = require('./readFile');

const deleteTalker = async (req, res) => {
    const { id } = req.params;
    const talkers = await readFile();

    const talkerIndex = talkers.findIndex((t) => t.id === Number(id));

    if (talkerIndex === -1) {
        return res.status(404).json({ message: 'Not found.' });
    }

    talkers.splice(talkerIndex, 1);
    await fs.writeFile('./talker.json', JSON.stringify(talkers, null, 2));
    return res.status(204).end();
};

module.exports = { deleteTalker };