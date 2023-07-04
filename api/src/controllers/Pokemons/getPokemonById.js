const URL = 'https://pokeapi.co/api/v2/pokemon';
const axios = require('axios');
const { validate } = require('uuid');
const { Pokemon } = require('../../db');
module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        let pokemon = null;
        if (!isNaN(id)) {
            const { data } = await axios(`${URL}/${id}`);
            let { name, sprites, stats, weight, height } = data;
            pokemon = { id, name, image: sprites.other.home.front_default, hp: stats[0].base_stat, attack: stats[1].base_stat, defense: stats[2].base_stat, speed: stats[5].base_stats, weight, height };
        } else if (validate(id)) {
            pokemon = await Pokemon.findOne({ where: { id } });
        } else {
            throw new Error('Error ID');
        }
        if (!pokemon) throw new Error('Pokemon not Found');
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}