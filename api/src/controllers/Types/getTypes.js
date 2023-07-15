const getBd = require('../../helpers/Types/getBd');

module.exports = async () => {
    const types = await getBd();
    if (types.length === 0) throw new Error('Types not found');
    return types;
};