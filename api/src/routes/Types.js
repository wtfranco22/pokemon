const { getTypes
} = require('../controllers/Types');

const router = require('express').Router();

router.get('/', getTypes);

module.exports = router;