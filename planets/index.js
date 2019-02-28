let express = require('express')
let create = require('./services/create')
let list = require('./services/list')
//import remove from './services/remove'


const router = express.Router()

//localhost:3000/bills  via postman
router.get('/', list)
//localhost:3000/bills  via postman
router.post('/', create)
//router.delete('/:id', remove)

module.exports = router
