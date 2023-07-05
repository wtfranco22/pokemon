const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1281';

async function apiPokemons(index, end) {
    const { data } = await axios.get(URL);
    const filtersPokemon = data.results.slice(index, end);
    const searchPokemons = filtersPokemon.map(async (pokemon) => {
        const { data } = await axios(pokemon.url);
        let { id, name, sprites, stats, weight, height, types } = data;
        let allTypes = types.map((type) => ({ "name": type.type.name }));
        return { id, name, image: sprites.other.home.front_default, hp: stats[0].base_stat, attack: stats[1].base_stat, defense: stats[2].base_stat, speed: stats[5].base_stats, weight, height, types: allTypes };
    });
    const pokemons = await Promise.all(searchPokemons);
    return pokemons;
};
module.exports = apiPokemons;