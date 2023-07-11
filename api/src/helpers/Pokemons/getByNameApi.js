const URL = 'https://pokeapi.co/api/v2/pokemon';
const axios = require('axios');

module.exports = async (nombre) => {
    try {
        const response = await axios(`${URL}/${nombre}`);
        if (!response.data) throw new Error(response.data);
        let { id, name, sprites, stats, weight, height, types } = response.data;
        let allTypes = types.map((type) => ({ name: type.type.name }));
        const pokemon = { id, name, image: sprites.other.home.front_default, hp: stats[0].base_stat, attack: stats[1].base_stat, defense: stats[2].base_stat, speed: stats[5].base_stats, weight, height, types: allTypes };
        return pokemon;
    }
    catch {
        return false;
    }
}