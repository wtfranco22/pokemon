const dbPokemons = require('../../helpers/Pokemons/getBd');
const apiPokemons = require('../../helpers/Pokemons/getApi');

module.exports = async () => {
    const pokemonsAPI = await apiPokemons();
    const pokemonsDB = await dbPokemons();
    return [...pokemonsAPI, ...pokemonsDB];
};