const { validate } = require('uuid');
const { Pokemon } = require('../../db');

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        if (!validate(id)) throw new Error('Error ID');
        const pokemon = await Pokemon.findByPk(id);
        if (!pokemon) throw new Error('Pokemon not found');
        await pokemon.destroy({ cascade: true });
        return res.status(200).json({ destroy: true });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};