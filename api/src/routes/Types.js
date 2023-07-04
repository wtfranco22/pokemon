const { getTypes,
    getTypeByName,
    createType,
    updateType,
    deleteType
} = require('../controllers/Types');

const router = require('express').Router();

router.get('/', getTypes);
router.get('/:name', getTypeByName);
router.post('/', createType);
router.put('/:id', updateType);
router.delete('/:id', deleteType);

module.exports = router;