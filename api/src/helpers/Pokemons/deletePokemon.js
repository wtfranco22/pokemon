const { Pokemon } = require('../../db');

module.exports = async (id) => {
    const pokemon = await Pokemon.findByPk(id);
    if (!pokemon) throw new Error('Pokemon not found');
    await pokemon.destroy({ cascade: true });
};