const { Type } = require('../../db');

module.exports = async () => {
    const types = await Type.findAll();
    if (!types || !Array.isArray(types)) throw new Error('Types not founds');
    return types;
};