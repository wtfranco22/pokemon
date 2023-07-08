const { getPokemonByName } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        const { name } = req.query;
        const pokemon = await getPokemonByName(name);
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}