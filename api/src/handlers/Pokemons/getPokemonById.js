const { getPokemonById } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const pokemon = await getPokemonById(id);
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}