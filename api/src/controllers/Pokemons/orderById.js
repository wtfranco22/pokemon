const dbPokemons = require('../../helpers/Pokemons/getBd');
const apiPokemons = require('../../helpers/Pokemons/getApi');

const orderAsc = async (index, cant) => {
    const api = await apiPokemons(index, (index + cant));
    if (api.length == cant) return [...api];
    index = index + api.length;
    cant = cant - api.length;
    const db = await dbPokemons(index, (index + cant));
    if (!db && !api) throw new Error('Pokemons not found');
    return [...api, ...db];
};

const orderDesc = async () => {
    const db = await dbPokemons(index, (index + cant));
    if (db.length == cant) return [...api];
    const api = await apiPokemons(index, (index + cant));
    index = index + api.length;
    cant = cant - api.length;
    if (!db && !api) throw new Error('Pokemons not found');
    return [...db, ...api];
};

module.exports = async (index, cant, order = 'asc') => {
    try {
        return (order === 'asc') ? await orderAsc(index, cant) : await orderDesc(index, cant);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};