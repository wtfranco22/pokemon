const deletePokemon = require('../../helpers/Pokemons/deletePokemon');
const { validate } = require('uuid');

module.exports = async (id) => {
    if (!validate(id)) throw new Error('Invalid ID');
    await deletePokemon(id);
};