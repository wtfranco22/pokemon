const router = require('express').Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const PokemonsRouter = require('./Pokemons');
const TypesRouter = require('./Types');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', PokemonsRouter);
router.use('/types', TypesRouter);

module.exports = router;
