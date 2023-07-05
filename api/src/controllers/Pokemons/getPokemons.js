const dbPokemons = require('../../helpers/Pokemons/getBd');
const apiPokemons = require('./../../helpers/Pokemons/getApi');

module.exports = async (req, res) => {
    let index = +req.query.index || 0;
    let cant = +req.query.cant || 12;
    try {
        const api = await apiPokemons(index, (index + cant));
        if (api.length == cant) return res.status(200).json(api);
        index = index + api.length;
        cant = cant - api.length;
        const db = await dbPokemons(index, (index + cant));
        if (!db && !api) throw new Error('Pokemons not found');
        const pokemons = [...db, ...api];
        return res.status(200).json(pokemons);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};