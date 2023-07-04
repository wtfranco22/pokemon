const { validate } = require('uuid');
const { Pokemon } = require('../../db');

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        if (!validate(id)) throw new Error('Error ID');
        const { name, image, hp, attack, defense, speed, height, weight } = req.body;
        const pokemon = await Pokemon.findByPk(id);
        if (!pokemon) throw new Error('Pokemon not found');
        await pokemon.update({ name, image, hp, attack, defense, speed, height, weight });
        return res.status(200).json({ updated: true });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};