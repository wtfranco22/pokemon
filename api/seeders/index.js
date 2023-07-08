const axios = require('axios');
const { Type } = require('../src/db');
const URL = 'https://pokeapi.co/api/v2/type';
module.exports = async () => {
    try {
        let types = await Type.findAll();
        if (types.length < 1) {
            const { data } = await axios(URL);
            types = data.results.map((type) => (
                { name: type.name }
            ));
            await Type.bulkCreate(types);
            console.log('success seeder Type');
        } else {
            console.log('Table already!');
        }
    } catch (error) {
        console.log('Error seeder Type---> ERROR: ' + error.message);
    };
};