const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=110';
module.exports = async () => {

    const { data } = await axios(URL);
    const responses = await Promise.all(data.results.map((pokemon) => axios(pokemon.url)));
    const pokemons = responses.map((response) => {
        let { id, name, sprites, stats, weight, height, types } = response.data;
        let allTypes = types.map((type) => ({ name: type.type.name }));
        let img = (sprites.other.home.front_default!==null) ? sprites.other.home.front_default : 'https://cdn.vox-cdn.com/thumbor/PSIN27PZ8SJuO5QcOePOsHiMvfQ=/0x0:1920x1080/1570x628/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/53262569/who_pokemon.0.jpg';
        return { id, name, image: img, hp: stats[0].base_stat, attack: stats[1].base_stat, defense: stats[2].base_stat, speed: stats[5].base_stat, weight, height, types: allTypes };
    });
    if (pokemons[0].name) {
        return pokemons;
    }
    throw new Error(`ERROR: helpers/getApi ${error.message}`);
};