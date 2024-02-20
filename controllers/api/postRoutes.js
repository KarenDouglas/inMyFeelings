const router = require('express').Router()
const { Post, Comment } = require('../../models')
const { findByPk } = require('../../models/User')
// /api/posts
router.get('/', async(req, res) => {

    try{
        const posts = await Post.findAll({
            include: Comment
        })
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
        const post = await Post.findByPk(req.params.id, {include:Comment})
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
    if(req.session.loggedIn){
       
    try{
        const {title, post_text, word_count, comment_count,category} = req.body
        const postData = await Post.create(
            {
                title: title,
                post_text: post_text,
                word_count: word_count,
                comment_count: comment_count,
                category: category,
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
}else{
    return res.render('signin')

}
})
router.put('/:postId', async (req, res) => {
    try {
        // Extract data from the request body
        const { title, post_text, category, user_id } = req.body;
        
        // Update the post with the provided postId
        const updatedPost = await Post.update(
            {
                title: title,
                post_text: post_text,
                word_count:0,
                comment_count: 0,
                category: category,
                user_id: user_id
            },
            {
                where: {
                    id: req.params.postId
                }
            }
        );
        
        
        return res.status(200).json({ message: `Successfully updated post with ID ${req.params.postId}`, data: updatedPost });
    } catch(err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.delete('/:postID', async(req, res) => {
    try{

        
       
        
    await Post.destroy(
            {
                where: {
                    id: parseInt(req.params.postID)
                }
            }
        )
        return res.status(200).json(
            {
                message: "your post has been successfully deleted",
            }
        )
    }catch(err){
        return res.status(500).json({message: "Internal Server Error", error: err})
    }
})


module.exports = router