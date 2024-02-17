const router = require('express').Router()
const { User } = require('../../models')

router.get('/', async (req, res) => {
    try{
        const users = await User.findAll()
        return res.status(200).json({message: "successfully retrieved Users", data: [users]})
    }catch(err){
        return res.status(200).json({message: "Internal Server Error", error: err})
    }
})
router.get('/:id', async(req, res) =>{
    try{
        const user = await User.findByPk(req.params.id)
        return res.status(200).json({message: `successfully retrived ${user.user_name} at id: ${req.params.id}`, data: user})
    }catch(err){
        return res.status(500).json({message: "Internal Server Error"})
    }
})
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
router.post('/login', async (req, res) => {
    try{
        const {user_name, password} = req.body
        const user = await User.findOne({where:{user_name: user_name}
        })
        if(!user){
            return res.status(400).json({message: " Incorrect username please try again"})
        }
        const verifyPassword = await user.verifyPassword(password)
        if(!verifyPassword){
            return res.status(400).json({message: " Incorrect or password please try again"})
        }
        return res.status(200).json({message:"You are now logged in!", data: user})
    }catch(err){
        return res.status(500).json({error: 'Internal Server Error '})
    }
})

module.exports = router