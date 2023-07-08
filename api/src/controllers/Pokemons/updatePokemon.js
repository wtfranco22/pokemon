const updatePokemon = require('../../helpers/Pokemons/updatePokemon');
const { validate } = require('uuid');

module.exports = async (id, dataPokemon) => {
    try {
        const { name, image, hp, attack, defense, speed, height, weight } = dataPokemon;
        if (!validate(id)) throw new Error('invalid ID');
        if (
            name === undefined ||
            typeof name !== 'string' ||
            image === undefined ||
            typeof image !== 'string' ||
            hp === undefined ||
            !Number.isInteger(hp) ||
            attack === undefined ||
            !Number.isInteger(attack) ||
            defense === undefined ||
            !Number.isInteger(defense) ||
            speed === undefined ||
            !Number.isInteger(speed) ||
            weight === undefined ||
            !Number.isInteger(weight) ||
            height === undefined ||
            !Number.isInteger(height)
        ) throw new Error('Invalid data!');
        return (await updatePokemon(id, dataPokemon));
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};