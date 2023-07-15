const { getTypes } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        const types = await getTypes();
        return res.status(200).json(types);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};