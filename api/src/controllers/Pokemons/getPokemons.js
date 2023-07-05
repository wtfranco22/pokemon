const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1281';
const axios = require('axios');
const { Pokemon } = require('../../db');

module.exports = async (req, res) => {
    let index = +req.query.index || 0;
    let cant = +req.query.cant || 5;
    try {
        const myPokemons = await Pokemon.findAll({ index: index, limit: cant });
        if (myPokemons.length == cant) return res.status(200).json(myPokemons);
        cant = index + cant - myPokemons.length;
        const { data } = await axios.get(URL);
        const getDetailsPokemon = data.results.slice(index, cant).map(async (pokemon) => {
            const { data } = await axios(pokemon.url);
            let { id, name, sprites, stats, weight, height, types } = data;
            let allTypes = types.map((type) => ({ "name": type.type.name }));
            return { id, name, image: sprites.other.home.front_default, hp: stats[0].base_stat, attack: stats[1].base_stat, defense: stats[2].base_stat, speed: stats[5].base_stats, weight, height, types: allTypes };
        });
        const pokemonDetails = await Promise.all(getDetailsPokemon);
        return res.status(200).json([...myPokemons, ...pokemonDetails]);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};