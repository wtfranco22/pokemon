const { Pokemon, Type } = require('../../db');
const cantApi = 1281;
async function dbPokemons(index, end) {
    let init = cantApi - index;
    const pokemons = await Pokemon.findAll({
        offset: init,
        limit: end,
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    });
    return pokemons;
};
module.exports = dbPokemons;