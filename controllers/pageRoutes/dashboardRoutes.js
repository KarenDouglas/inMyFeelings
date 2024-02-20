const router = require('express').Router()
const { User, Post, Comment } = require('../../models')

router.get('/:userId', async(req, res) => {
  
    if(req.session.loggedIn){
        try{
            const userData = await User.findOne({
                where: { id: parseInt(req.params.userId) },
                include: Post  // Include the Comment model to fetch associated comments
            }).catch((err) => { 
                res.json(err);
            });
            
            
            const user = userData.get({ plain: true });
            return res.status(200).render('dashboard', {user})
        }catch(err){
            return res.status(200).json({message: "Internal Server Error", error: err})
        }
        
    }else{
        return res.render('signin')

    }

})

module.exports = router
