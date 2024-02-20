const router = require('express').Router()

router.get('/', async(req, res) => {

    
    
    return res.status(200).render('add-entry',{userId: req.session.userId})

})

module.exports = router