const { Pokemon, Type } = require('../../db');

module.exports = async (req, res) => {
    try {
        let { name, image, hp, attack, defense, speed, weight, height, typeIds } = req.body;
        if (!(name && image && hp && attack && defense && speed && weight && height)) {
            throw new Error('Incomplete data');
        }
        const [newPokemon, created] = await Pokemon.findOrCreate({
            where: { name },
            defaults: { name, image, hp, attack, defense, speed, weight, height }
        });
        if (!created) {
            throw Error('This Pokémon already exists!');
        };
        if (typeIds && typeIds.length > 0) {
            const types = await Type.findAll({
                where: { id: typeIds }
            });
            await newPokemon.setTypes(types);
        }
        await newPokemon.reload({
            include: {
                model: Type,
                attributes: ['name'],
                through: { attributes: [] }
            }
        });
        return res.status(200).json(newPokemon);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};