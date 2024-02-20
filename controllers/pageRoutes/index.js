const router = require('express').Router()
const homeRoutes = require('./homeRoutes')
const dashboardRoutes = require('./dashboardRoutes')
const loginRoutes = require('./loginRoutes')
const signupRoutes = require('./signupRoutes')
const postByIdRoutes = require('./postByIdRoutes')
const addEntryRoutes = require('./addEntryRoutes')
const editEntryRoutes = require('./editEntryRoutes')


router.use('/home', homeRoutes)
router.use('/dashboard', dashboardRoutes)
router.use('/login', loginRoutes)
router.use('/signup', signupRoutes)
router.use('/post', postByIdRoutes)
router.use('/addEntry', addEntryRoutes)
router.use('/editEntry', editEntryRoutes)


module.exports = router