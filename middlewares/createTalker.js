const fs = require('fs').promises;
const { readFile } = require('./readFile');

const createTalker = async (req, res) => {
    const { name, age, talk: { watchedAt, rate } } = req.body;

    const talkers = await readFile();
    const id = talkers.length + 1;
    const talkerObj = {
        id,
        name,
        age,
        talk: {
            watchedAt,
            rate,
        },
    };
    talkers.push(talkerObj);
    await fs.writeFile('./talker.json', JSON.stringify(talkers));
    return res.status(201).json(talkerObj);
};

module.exports = { createTalker };