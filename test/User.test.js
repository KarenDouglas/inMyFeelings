
const {User} = require('../models')

describe('it should get and create User Data', () => {
 
    test('it should retrieve all user data',async()=>{

            const users = await User.findAll()
            expect(Array.isArray(users)).toBe(true)          

        
    })

    test('should retrieve a certain user', async() => {

            const user = User.findByPk(1)
            expect(user).toBeDefined()
         
        
    })
    test('should login user by username',async () => {

            const user = await User.findOne({where: {user_name: 'jon'}})

            expect(user).toBeDefined()
        
    })

   
    })
    