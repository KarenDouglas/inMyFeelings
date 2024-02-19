const router = require('express').Router()
const homeRoutes = require('./homeRoutes')
const dashboardRoutes = require('./dashboardRoutes')
const loginRoutes = require('./loginRoutes')
const signupRoutes = require('./signupRoutes')

router.use('/home', homeRoutes)
router.use('/dashboard', dashboardRoutes)
router.use('/login', loginRoutes)
router.use('/signup', signupRoutes)

module.exports = router