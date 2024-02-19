const router = require('express').Router()
const { User, Post,Comment } = require('../../models')

router.get('/', async(req, res) => {

    
        const postData = await Post.findAll({
            include: Comment
        }).catch((err) => { 
            res.json(err);
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        return res.status(200).render('home', {posts})
   
})

module.exports = router
