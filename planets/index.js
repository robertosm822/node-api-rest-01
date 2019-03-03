let express = require('express')
let create = require('./services/create')
let list = require('./services/list')
let remove = require('./services/remove')
let searchByName = require('./services/searchByName')
let searchById = require('./services/searchById')


const router = express.Router()

//localhost:3000/planets  via postman
router.get('/', list)
//localhost:3000/planets/3h3j3h2j3h32jh3
router.get('/:id', searchById)

//localhost:3000/planets  via postman
router.post('/', create)
router.delete('/:id', remove)
//busca por nome
router.get('/search', searchByName)

module.exports = router;
