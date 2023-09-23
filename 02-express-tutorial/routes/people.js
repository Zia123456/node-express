const express = require('express');
const router = express.Router();

let { people } = require('../data');

router.get('/');
router.post('/');
router.post('/postman');
router.put('/:id');
router.delete('/:id');

module.exports = router;
