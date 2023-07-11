const validate = (pokemonData) => {
    let errors = {};
    if(pokemonData.name.trim()==='' || !isNaN(pokemonData.name)) errors.name = 'Invalid Data';
    if(pokemonData.image.trim()==='') errors.image = 'Invalid Data';
    if(pokemonData.hp.trim()==='' || isNaN(pokemonData.hp)) errors.hp = 'Invalid Data';
    if(pokemonData.attack.trim()==='' || isNaN(pokemonData.attack)) errors.attack = 'Invalid Data';
    if(pokemonData.defense.trim()==='' || isNaN(pokemonData.defense)) errors.defense = 'Invalid Data';
    if(pokemonData.speed.trim()==='' || isNaN(pokemonData.speed)) errors.speed = 'Invalid Data';
    if(pokemonData.height.trim()==='' || isNaN(pokemonData.height)) errors.height = 'Invalid Data';
    if(pokemonData.weight.trim()==='' || isNaN(pokemonData.weight)) errors.weight = 'Invalid Data';
    return errors;
};

export default validate;