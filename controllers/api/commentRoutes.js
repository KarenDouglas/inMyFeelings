const router = require('express').Router()
const { Comment } = require('../../models')
// /api/comments/
router.get('/', async(req, res) => {

    try{
        const comments = await Comment.findAll()
        return res.status(200).json(
            {
                message: 'successfullly retrieved comments',
                data: comments
            }
        )
    }catch(err){
        return res.status(200).json({message: "Internal Server Error", error: err})
    }
})

router.post('/:userID/:postID', async(req, res) => {
    if(req.session.loggedIn){
    try{
        const {comment_text} = req.body
       
        const commentData = await Comment.create(
            {
                comment_text:comment_text,
                user_id: req.params.userID,
                post_id: req.params.postID
            }
        )
        return res.status(200).json(
            {
                message: "successfully posted new comment ",
                data: commentData
            }
        )
    }catch(err){
        return res.status(200).json({message: "Internal Server Error", error: err})
    }
    }else{
    return res.render('signin')

    }
})
router.delete('/:commentID', async(req, res) => {
    try{
        const deletedComment = await Comment.destroy(
            {
                where: {
                    id: parseInt(req.params.commentID)
                }
            }
        )
        return res.status(200).json(
            {
                message: "your comment has been successfully deleted",
                data: deletedComment
            }
        )
    }catch(err){
        return res.status(200).json({message: "Internal Server Error", error: err})
    }
})

module.exports = router