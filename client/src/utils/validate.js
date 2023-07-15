const regexAZ = /^[a-záéíóú]+$/i;
const regexInt = /^([1-9]\d{0,2}|999)$/;
const regexHTTPS = /^https:\/\//;
const validate = (pokemonData) => {
    let errors = {};
    if (!regexAZ.test(pokemonData.name.toLowerCase())) errors.name = 'Please enter a string';
    if (pokemonData.length > 50) errors.name = 'The name exceeds the character limit allowed'
    if (pokemonData.image.trim() !== '') {
        if (!regexHTTPS.test(pokemonData.image)) errors.image = 'Image URL must start with "https://"';
    }
    if (!regexInt.test(pokemonData.hp)) errors.hp = 'Please enter a number between 1 and 999';
    if (!regexInt.test(pokemonData.attack)) errors.attack = 'Please enter a number between 1 and 999';
    if (!regexInt.test(pokemonData.defense)) errors.defense = 'Please enter a number between 1 and 999';
    if (!regexInt.test(pokemonData.speed)) errors.speed = 'Please enter a number between 1 and 999';
    if (pokemonData.height !== 0) {
        if (!regexInt.test(pokemonData.height)) errors.height = 'Please enter a number between 1 and 999';
    };
    if (pokemonData.weight !== 0) {
        if (!regexInt.test(pokemonData.weight)) errors.weight = 'Please enter a number between 1 and 999';
    };
    if (!(pokemonData.typeIds.length >= 1 && pokemonData.typeIds.length <= 2)) errors.typeIds = 'Please select 1 or 2 types';
    return errors;
};
const validateTypes = (types) => {
    let resTypes = [];
    types.forEach((type) => {
        if (!resTypes.includes(type)) {
            resTypes.push(type);
        } else {
            resTypes.splice(resTypes.indexOf(type), 1);
        };
    });
    return resTypes;
};
export { validate, validateTypes };