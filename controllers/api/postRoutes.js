const router = require('express').Router()
const { Post } = require('../../models')
const { findByPk } = require('../../models/User')
// /api/posts
router.get('/', async(req, res) => {

    try{
        const posts = await Post.findAll()
        return res.status(200).json(
            {
                message: 'successfullly retrieved Posts',
                data: posts
            }
        )
    }catch(err){
        return res.status(200).json({message: "Internal Server Error", error: err})
    }
})

router.get('/:id', async(req, res) => {
    try{
        const post = await Post.findByPk(req.params.id)
        return res.status(200).json(
            {
                message: "successfully retrieved post",
                data: post
            }
        )
    }catch(err){
        return res.status(200).json({message: "Internal Server Error", error: err})
    }
})
router.post('/:userID', async(req, res) => {
    try{
        const {title, post_text, word_count, comment_count} = req.body
        const postData = await Post.create(
            {
                title: title,
                post_text: post_text,
                word_count: word_count,
                comment_count: comment_count,
                user_id: req.params.userID
            }
        )
        return res.status(200).json(
            {
                message: "successfully posted new entry ",
                data: postData
            }
        )
    }catch(err){
        return res.status(200).json({message: "Internal Server Error", error: err})
    }
})
router.delete('/:postID', async(req, res) => {
    try{
        const deletedPost = await Post.destroy(
            {
                where: {
                    id: req.params.postID
                }
            }
        )
        return res.status(200).json(
            {
                message: "your post has been successfully deleted",
                data: deletedPost
            }
        )
    }catch(err){
        return res.status(200).json({message: "Internal Server Error", error: err})
    }
})

module.exports = router