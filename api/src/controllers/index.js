const getAllPokemons = require('./Pokemons/getAllPokemons');
const getPokemonById = require('./Pokemons/getPokemonById');
const getPokemonByName = require('./Pokemons/getPokemonByName');
const createPokemon = require('./Pokemons/createPokemon');
const updatePokemon = require('./Pokemons/updatePokemon');
const deletePokemon = require('./Pokemons/deletePokemon');

module.exports = {
    getAllPokemons,
    getPokemonById,
    getPokemonByName,
    createPokemon,
    updatePokemon,
    deletePokemon
}