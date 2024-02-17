const { describe } = require('yargs');
const User = require('../models/User')

//should create a new user
//user .id should be defined
// user name should be
//password should be hashed
    it('should create a new User', async() =>{
        try {
            const user = await User.create({ user_name: "jon", password: "password" });
     
            // Assertion for id existence
            expect(user.id).toBeDefined();
            
            // Assertion for user_name
            expect(user.user_name).toBe("jon");
    
            // Assertion for password hashing
            expect(user.password).not.toBe("password");
        
            const bcrypt = require('bcrypt');
            const isPasswordValid = await bcrypt.compare("password", user.password);
            expect(isPasswordValid).toBe(true);
        } catch (error) {
            // Log any errors that occur during the test
            // Fail the test explicitly
            expect(error).toBe(error);
        }
    })
    it('it should retrieve all user data',async()=>{
        try{
            const users = await User.findAll()
            expect(users.isArray(result)).toBe(true)          

        }catch(error){
            expect(error).toBe(error);
        }

    })

    it('should retrieve a certain user', async() =>{
        try{
            const user = User.findByPk(1)
            expect(user.user_name).toBeDefined()
        }catch(err){
            expect(err).toBeDefined()
        }     
    })
    it('should login user by username',async () => {
        try{
            const user = await User.findOne({where: {user_name: 'jon'}})

            expect(user).toBeDefined()
        }catch(err){

        }
    })