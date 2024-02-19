const router = require('express').Router()
const { User, Post, Comment } = require('../../models')

router.get('/:userId', async(req, res) => {

    if(req.session.userId ===JSON.parse(req.params.userId)){
       
        const userData = await User.findOne({
            where: { id: req.params.userId },
            include: Comment // Include the Comment model to fetch associated comments
        }).catch((err) => { 
            res.json(err);
        });
        
        
        const user = userData.get({ plain: true });
        return res.status(200).render('dashboard', {user})
    }else{
        return res.render('signin')

    }

})

module.exports = router
