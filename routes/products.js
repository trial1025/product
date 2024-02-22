import { Router } from 'express'
import * as auth from '../middlewares/auth.js'
import { create, getAll, edit, get, getId, remove, getAccount } from '../controllers/products.js'
import upload from '../middlewares/upload.js'
import admin from '../middlewares/admin.js'

const router = Router()

router.post('/', auth.jwt, upload, create)
router.get('/me', auth.jwt, getAccount)
router.get('/all', auth.jwt, admin, getAll)
router.patch('/:id', auth.jwt, upload, edit)
router.get('/:id', getId)
router.delete('/:id', auth.jwt, remove)
router.get('/', get)

export default router
