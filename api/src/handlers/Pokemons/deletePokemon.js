const { deletePokemon } = require("../../controllers");

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        await deletePokemon(id);
        return res.status(200).json({ destroy: true });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};