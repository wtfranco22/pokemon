const createPokemon = require('../../helpers/Pokemons/createPokemon');

module.exports = async (dataPokemon) => {
    if (!(dataPokemon.name && dataPokemon.image && dataPokemon.hp && dataPokemon.attack && dataPokemon.defense && dataPokemon.speed && dataPokemon.weight && dataPokemon.height && dataPokemon.typeIds.length > 0)) {
        throw new Error('Incomplete data');
    };
    const newPokemon = await createPokemon(dataPokemon);
    return newPokemon;
};