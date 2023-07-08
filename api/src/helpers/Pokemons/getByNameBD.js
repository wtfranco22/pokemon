const { Pokemon, Type } = require('../../db');

module.exports = async (name) => {
    return await Pokemon.findOne({
        where: { name },
        include: {
            model: Type,
            attributes: ['name'],
            through: { attributes: [] }
        }
    })
}