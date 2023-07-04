const URL = 'https://pokeapi.co/api/v2/pokemon';
const axios = require('axios');
const { Pokemon } = require('../../db');

module.exports = async (req, res) => {
    try {
        const myPokemons = await Pokemon.findAll();
        const { data } = await axios.get(URL);
        const getDetailsPokemon = data.results.map(async (pokemon) => {
            const { data } = await axios(pokemon.url);
            let { id, name, sprites, stats, weight, height } = data;
            return { id, name, image: sprites.other.home.front_default, hp: stats[0].base_stat, attack: stats[1].base_stat, defense: stats[2].base_stat, speed: stats[5].base_stats, weight, height };
        });
        const pokemonDetails = await Promise.all(getDetailsPokemon);
        return res.status(200).json([...myPokemons, ...pokemonDetails]);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};