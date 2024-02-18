
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

    describe('Update User Model', () =>{
        test('should update user entry_count', async () => {
        await User.update({
            entry_count: 10
        },
        {
            where: {
                id: 1
            }
        }
        )
        const user = await User.findByPk(1)
         expect(user).toBeDefined()
         expect(user.entry_count).toBe(10)
         
        });
    
        });
    })
    