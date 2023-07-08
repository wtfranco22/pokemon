const getByNameApi = require("../../helpers/Pokemons/getByNameApi");
const getByNameBD = require("../../helpers/Pokemons/getByNameBD");

module.exports = async (nombre) => {
    const name = nombre.toLowerCase();
    let pokemon = await getByNameApi(name) || await getByNameBD(name);
    if (!pokemon) throw new Error('Pokemon not found');
    return pokemon;
}