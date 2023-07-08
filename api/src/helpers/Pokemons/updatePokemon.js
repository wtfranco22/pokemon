const { Pokemon } = require('../../db');

module.exports = async (id, dataPokemon) => {
    const { name, image, hp, attack, defense, speed, height, weight } = dataPokemon;
    const pokemon = await Pokemon.findByPk(id);
    if (!pokemon) throw new Error('Pokemon not found');
    await pokemon.update({ name, image, hp, attack, defense, speed, height, weight });
    return pokemon;
}