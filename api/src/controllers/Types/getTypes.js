const { Type } = require('../../db');
module.exports = async (req, res) => {
    try {
        const types = await Type.findAll();
        if (!types || !Array.isArray(types)) throw new Error('Types not founds');
        return res.status(200).json(types);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};