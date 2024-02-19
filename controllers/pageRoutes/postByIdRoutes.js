const router = require('express').Router()
const { Post, Comment } = require('../../models')
router.get('/:id', async(req, res) => {
    try{
        const postData = await Post.findByPk(req.params.id)
        const post = postData.get({ plain: true });
        return res.status(200).render('post',{post})
    }catch(err){
        return res.status(200).json({message: `Internal Server Error`, error: err})
    }
})

module.exports =router