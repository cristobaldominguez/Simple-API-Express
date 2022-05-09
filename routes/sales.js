import express from 'express'

import sales from '../db/sales.js'

// Router Creation
const router = express.Router()

// Routes
router.get('/', (_, res) => {
    res.json(sales)
})

export default router
