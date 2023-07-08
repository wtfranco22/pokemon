const { Pokemon, Type } = require('../../db');

module.exports = async () => {
    const pokemons = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    });
    console.log(typeof(pokemons))
    if (pokemons) {
        return pokemons;
    }
    throw new Error(`ERROR: helpers/getBD ${error.message}`);
};