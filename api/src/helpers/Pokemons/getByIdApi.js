const URL = 'https://pokeapi.co/api/v2/pokemon';
const axios = require('axios');

module.exports = async (id) => {
    const { data } = await axios(`${URL}/${id}`);
    if (!data) throw new Error('Pokemon not found');
    const { name, sprites, stats, weight, height, types } = data;
    const allTypes = await types.map((type) => ({ name: type.type.name }));
    pokemon = { id, name, image: sprites.other.home.front_default, hp: stats[0].base_stat, attack: stats[1].base_stat, defense: stats[2].base_stat, speed: stats[5].base_stat, weight, height, types: allTypes };
    return pokemon;
}