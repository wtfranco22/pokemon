const { getPokemons,
    getPokemonById,
    getPokemonByName,
    createPokemon,
    // updatePokemon,
    // deletePokemon
} = require('../controllers/Pokemons');

const router = require('express').Router();

router.get('/', (req,res)=>{
    const {name} = req.query;
    (name) ? getPokemonByName(req,res) : getPokemons(req,res);
});
router.post('/', createPokemon);
// router.put('/:id', updatePokemon);
router.get('/:id', getPokemonById);
// router.delete('/:id', deletePokemon);

module.exports = router;