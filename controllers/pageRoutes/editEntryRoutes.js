const router = require('express').Router()

router.get('/:postID', async(req, res) => {

    
    
    return res.status(200).render('edit-entry')

})

module.exports = router