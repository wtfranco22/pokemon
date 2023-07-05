const { orderById } = require('../controllers/Pokemons');

module.exports = async (req, res) => {
    let index = +req.query.index || 0;
    let cant = +req.query.cant || 12;
    let orderId = req.query.orderId;
    try {
        const pokemons = await orderById(index, cant, orderId);
        return res.status(200).json(pokemons);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};