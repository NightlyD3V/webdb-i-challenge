const express = require('express');

const router = express.Router();
const db = require('../dbConfig.js');

/* GET: /api/accounts/ (returns all accounts)*/
router.get('/', (req, res) => {
    db('accounts')
    .then((accounts) => {
       res.json(accounts);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            message: 'Error getting all accounts!'
        });
    });
});

/* POST: /api/accounts/ */
router.post('/', (req, res) => {
    const postData = req.body;
    db('accounts').insert(postData)
    .then((post) => {
        res.status(200).json(post);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            message: 'Error creating new account!'
        });
    });
});

/* PUT: /api/accounts/:id */
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    db('accounts').where(id).update(updateData)
    .then((update) => {
        res.status(200).json(update);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            message: `Error updating account with ID: ${id}`
        });
    });
});

/* DELETE: /api/accounts/:id */
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db('accounts').where({ id }).del()
    .then((count) => {
        if(count) {
        res.status(200).json(count);
        } else {
            res.status(404).json({
                message: 'Invalid post ID'
            });
        }
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            message: `Error deleting account with ID: ${id}`
        });
    });
});

module.exports = router;