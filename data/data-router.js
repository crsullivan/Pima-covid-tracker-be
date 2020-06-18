const router = require('express').Router();
const Data = require('./data-model')
const restricted = require('../admin/restricted-middleware.js')

router.get('/', (req, res) => {
    Data
    .getData()
    .then(data => {
        res.json(data)
    })
    .catch(err => res.send(err))
})

router.post('/add', restricted, (req, res) => {
    Data
    .addData(data)
    .then(data => {
        res.json(data)
    })
    .catch(err => res.send(err))
})

module.exports = router;
