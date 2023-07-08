const { updatePokemon } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, image, hp, attack, defense, speed, height, weight } = req.body;
        const dataPokemon = { name, image, hp, attack, defense, speed, height, weight };
        const pokemon = await updatePokemon(id, dataPokemon);
        return res.status(200).json({ updated: true });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};