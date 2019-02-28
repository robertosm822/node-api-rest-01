let express = require('express')
let create = require('./services/create')
let list = require('./services/list')
let remove = require('./services/remove')
let searchByName = require('./services/searchByName')


const router = express.Router()

//localhost:3000/bills  via postman
router.get('/', list)
//localhost:3000/bills  via postman
router.post('/', create)
router.delete('/:id', remove)
//busca por nome
router.get('/search', searchByName)

module.exports = router;
