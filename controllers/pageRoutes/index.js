const router = require('express').Router()
const homeRoutes = require('./homeRoutes')
const dashboardRoutes = require('./dashboardRoutes')
const loginRoutes = require('./loginRoutes')
const signupRoutes = require('./signupRoutes')
const postByIdRoutes = require('./postByIdRoutes')


router.use('/home', homeRoutes)
router.use('/dashboard', dashboardRoutes)
router.use('/login', loginRoutes)
router.use('/signup', signupRoutes)
router.use('/post', postByIdRoutes)

module.exports = router