const { readFile } = require('./readFile');

const searchByName = async (req, res) => {
    const { q } = req.query;
    const talkers = await readFile();

    if (!q || q.length === 0) {
        return res.status(200).json(talkers);
    }

    const talkerByName = talkers.filter((t) => t.name.includes(q));

    return res.status(200).json(talkerByName);
};

module.exports = { searchByName };