const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1281';
module.exports = async () => {

    const { data } = await axios(URL);
    const responses = await Promise.all(data.results.map((pokemon) => axios(pokemon.url)));
    const pokemons = responses.map((response) => {
        let { id, name, sprites, stats, weight, height, types } = response.data;
        let allTypes = types.map((type) => ({ name: type.type.name }));
        return { id, name, image: sprites.other.home.front_default, hp: stats[0].base_stat, attack: stats[1].base_stat, defense: stats[2].base_stat, speed: stats[5].base_stats, weight, height, types: allTypes };
    });
    if (pokemons[0].name) {
        return pokemons;
    }
    throw new Error(`ERROR: helpers/getApi ${error.message}`);
};