import express from 'express'

// Router Creation
const router = express.Router()

// Routes
router.get('/', (_, res) => {
    res.redirect('/sales')
})

export default router
