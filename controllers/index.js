const router = require('express').Router()
const pageRoutes = require('./pageRoutes')
const apiRoutes = require('./api')


router.use('/api', apiRoutes)
router.use('/', pageRoutes)

module.exports = router