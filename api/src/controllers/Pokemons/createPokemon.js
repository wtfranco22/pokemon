const createPokemon = require('../../helpers/Pokemons/createPokemon');

module.exports = async (dataPokemon) => {
    if (!(dataPokemon.name && dataPokemon.image && dataPokemon.hp && dataPokemon.attack && dataPokemon.defense && dataPokemon.typeIds.length > 0)) {
        throw new Error('Incomplete data');
    };
    let { name, image, hp, attack, defense, speed, weight, height, typeIds } = dataPokemon;
    let pokemon = { name, image, hp, attack, defense, typeIds };
    if (speed) pokemon.speed = speed;
    if (weight) pokemon.weight = weight;
    if (height) pokemon.height = height;
    const newPokemon = await createPokemon(pokemon);
    return newPokemon;
};