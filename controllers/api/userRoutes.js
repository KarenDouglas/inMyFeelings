const router = require('express').Router()
const { User } = require('../../models')

router.post('/', async (req, res) => {
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

module.exports = router