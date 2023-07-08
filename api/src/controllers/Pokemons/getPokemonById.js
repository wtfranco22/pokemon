const getByIdApi = require('../../helpers/Pokemons/getByIdApi');
const getByIdBD = require('../../helpers/Pokemons/getByIdBD');
const { validate } = require('uuid');

module.exports = async (id) => {
    let pokemon = {};
    if (Number.isInteger(+id)) {
        pokemon = await getByIdApi(id);
    } else if (validate(id)) {
        pokemon = await getByIdBD(id);
    } else {
        throw new Error('Error ID');
    }
    return pokemon;
};