const { Pokemon, Type } = require('../../db');

module.exports = async (pokemon) => {
    let { name, image, hp, attack, defense, speed, weight, height, typeIds } = pokemon;
    const [newPokemon, created] = await Pokemon.findOrCreate({
        where: { name },
        defaults: { name, image, hp, attack, defense, speed, weight, height }
    });
    if (!created) {
        throw new Error('This Pokémon already exists!');
    };
    const types = await Type.findAll({
        where: { id: typeIds }
    });
    await newPokemon.setTypes(types);
    await newPokemon.reload({
        include: {
            model: Type,
            attributes: ['name'],
            through: { attributes: [] }
        }
    });
    return newPokemon;
}