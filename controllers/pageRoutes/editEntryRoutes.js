const router = require('express').Router()
const { User, Post, Comment } = require('../../models')
router.get('/:postId', async(req, res) => {

    if(req.session.loggedIn){
        try{
            const post = await Post.findByPk(req.params.postId)
            .catch((err) => { 
                res.json(err);
            });
            
            return res.status(200).render('edit-entry', {userId: req.session.userId, postId: req.params.postId})
        }catch(err){
            return res.status(200).json({message: "Internal Server Error", error: err})
        }
        
    }else{
        return res.render('login')

    }
    
    


})

module.exports = router