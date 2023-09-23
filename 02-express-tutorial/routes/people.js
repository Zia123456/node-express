const express = require('express');
const router = express.Router();

let { people } = require('../data');

router.get('/');
router.post('/');
router.put('/:id');

router.delete('/:id');

module.exports = router;
