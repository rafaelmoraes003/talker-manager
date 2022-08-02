const { readFile } = require('./readFile');

const getAllTalkers = async (req, res) => {
    try {
        const talkers = await readFile();
        res.status(200).json(talkers);
    } catch (error) {
        res.status(200).json([]);
    }
};

module.exports = { getAllTalkers };