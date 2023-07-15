const createPokemon = require('./Pokemons/createPokemon');
const getPokemonById = require('./Pokemons/getPokemonById');
const getPokemonByName = require('./Pokemons/getPokemonByName');
const getPokemons = require('./Pokemons/getPokemons');
const updatePokemon = require('./Pokemons/updatePokemon');
const deletePokemon = require('./Pokemons/deletePokemon');

const getTypes = require('./Types/getTypes');

module.exports = {
    createPokemon,
    getPokemonById,
    getPokemonByName,
    getPokemons,
    updatePokemon,
    deletePokemon,
    getTypes
}