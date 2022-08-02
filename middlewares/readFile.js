const fs = require('fs/promises');

const returnFile = async () => {
    const talkers = await fs.readFile('./talker.json');
    const parsedTalkers = JSON.parse(talkers);
    return parsedTalkers;
};

const readFile = async () => {
    try {
        const talkers = await returnFile();
        return talkers;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { readFile };