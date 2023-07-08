const { getAllPokemons } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        const pokemons = await getAllPokemons();
        return res.status(200).json(pokemons);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};