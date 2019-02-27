import express from 'express'
import create from './services/create'

import remove from './services/remove'
import list from './services/list'

const router = express.Router()

//localhost:3000/bills  via postman
router.get('/', list)
//localhost:3000/bills  via postman
router.post('/', create)
router.delete('/:id', remove)

export default router