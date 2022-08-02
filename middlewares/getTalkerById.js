const { readFile } = require('./readFile');

const getTalkerById = async (req, res) => {
    const { id } = req.params;
    const talkers = await readFile();
    const talkerByID = talkers.find((t) => t.id === Number(id));
    if (!talkerByID) {
        return res.status(404).json({ 
            message: 'Pessoa palestrante não encontrada',
        });
    }
    return res.status(200).json(talkerByID);
};

module.exports = { getTalkerById };