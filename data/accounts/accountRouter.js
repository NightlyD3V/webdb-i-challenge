const express = require('express');

const router = express.Router();
const db = require('../dbConfig.js');

/* GET: /api/accounts/ */
router.get('/', async (req, res) => {
    db('accounts');
})

module.exports = router;