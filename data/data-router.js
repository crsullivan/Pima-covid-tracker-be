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
    let data = req.body
    Data
    .addData(data)
    .then(info => {
        res.json(info)
    })
    .catch(err => res.send(err))
})

router.delete('/:id', restricted, (req, res) => {
    const {id} = req.params
    Data
    .removeData(id)
        .then(deleted => {
            if(deleted) {
                res.status(204).json(id)
            } else {
                res.status(404).json({message: "Could not delete"})
            }
        }) 
        .catch(error => {
            res.status(500).json({message: "failed to delete"})
        })
})

module.exports = router;
