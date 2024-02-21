const router = require('express').Router()
const { User, Post } = require('../../models')

// /api/users/

// get all user route route for develop
router.get('/', async (req, res) => {
    try{
        const users = await User.findAll({
            include: Post // Include the Post model to fetch associated posts
        });
        return res.status(200).json({message: "successfully retrieved Users", data: [users]})
    }catch(err){
        return res.status(200).json({message: "Internal Server Error", error:err})
    }
})
// get user by user id route
router.get('/:id', async(req, res) =>{
    try{
        const user = await User.findByPk(req.params.id)
        return res.status(200).json({message: `successfully retrived ${user.user_name} at id: ${req.params.id}`, data: user})
    }catch(err){
        return res.status(500).json({message: "Internal Server Error"})
    }
})

// post new users route
router.post('/signup', async (req, res) => {
    try{
        const {user_name, password } = req.body

        const newUserData = await User.create({
            user_name,
            password,
        })

        return res.status(200).json({message: `user :${user_name} ${password} created successfully`, data: newUserData})
    }catch(err){
        return res.status(500).json({error: 'Internal Server Error'})
    }
})
// post user to login
router.post('/login', async (req, res) => {
    try{
        const {user_name, password} = req.body
        const user = await User.findOne({where:{user_name: user_name}
        })
        if(!user){
            
            return res.status(400).json({message: " Incorrect username or password please try again"})
        }
        const verifyPassword = await user.verifyPassword(password)
        if(!verifyPassword){
            return res.status(400).json({message: " Incorrect username or password please try again"})
        }
        req.session.userId= user.id
        req.session.loggedIn = true;
        req.session.user_name= user_name
    
        return res.status(200).json({message:"You are now logged in!", data: user})
    }catch(err){
        return res.status(500).json({error: 'Internal Server Error '})
    }
})

router.post('/logout', async (req, res) => {
    try {
        // Set loggedIn to false
        req.session.loggedIn = false;
        // Clear other session data if needed
        req.session.userId = null;
        req.session.user_name = null;
        // Redirect to the home page
        return res.redirect('/');
    } catch (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.put('/:userId/:entryCount',async (req,res) => {
    try{
        const updatedUser = await User.update(
            {
            entry_count: req.params.entryCount
            },
            {   where: {
                    id: req.params.userId
                }
            }
        )
        return res.status(200).json({message: `You have successfully updated entry in ${req.params.userId}`, data: updatedUser})
        
    }catch(err){
        return res.status(500).json({error: 'Internal Server Error '})
    }
})

module.exports = router