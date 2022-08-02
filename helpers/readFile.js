const fs = require('fs/promises');

const readFile = async () => {
    const talkers = await fs.readFile('./talker.json');
    const parsedTalkers = JSON.parse(talkers);
    return parsedTalkers;
};

module.exports = { readFile };