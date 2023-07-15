const { getTypes } = require('../handlers');

const router = require('express').Router();

router.get('/', getTypes);

module.exports = router;