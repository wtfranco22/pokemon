const { Pokemon, Type } = require('../../db');

module.exports = async (id) => {
    return await Pokemon.findOne({
        where: { id },
        include: {
            model: Type,
            attributes: ['name'],
            through: { attributes: [] }
        }
    });
}