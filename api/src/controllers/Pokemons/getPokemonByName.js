const URL = 'https://pokeapi.co/api/v2/pokemon';
const axios = require('axios');
const { Pokemon, Type } = require('../../db');
module.exports = async (req, res) => {
    try {
        const nombre = req.query.name;
        let name = nombre.toLowerCase();
        let pokemon = await Pokemon.findOne({
            where: { name },
            include: {
                model: Type,
                attributes: ['name'],
                through: { attributes: [] }
            }
        });
        if (!pokemon) {
            const { data } = await axios(`${URL}/${nombre.toLowerCase()}`);
            let { id, name, sprites, stats, weight, height, types } = data;
            let allTypes = types.map((type) => ({ name: type.type.name }));
            pokemon = { id, name, image: sprites.other.home.front_default, hp: stats[0].base_stat, attack: stats[1].base_stat, defense: stats[2].base_stat, speed: stats[5].base_stats, weight, height, types: allTypes };
            if (!pokemon) throw new Error('Error de la peticion api');
        }
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}