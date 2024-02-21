import { Router } from 'express'
import * as auth from '../middlewares/auth.js'
import { create, getAll, edit, get, getId, remove } from '../controllers/products.js'
import upload from '../middlewares/upload.js'
// import admin from '../middlewares/admin.js'

const router = Router()

router.post('/', auth.jwt, upload, create)
router.get('/all', auth.jwt, getAll)
router.patch('/:id', auth.jwt, upload, edit)
router.get('/', get)
router.get('/:id', auth.jwt, getId)
router.delete('/:id', auth.jwt, remove)

export default router
