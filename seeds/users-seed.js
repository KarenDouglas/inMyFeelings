const { User } = require('../models');
const bcrypt = require('bcrypt');

const seedUsers = async () => {
    try {
        // Create users data
        const userData = [
            { user_name: 'user1', password: 'password1' },
            { user_name: 'user2', password: 'password2' },
            { user_name: 'user3', password: 'password3' },
            { user_name: 'user4', password: 'password4' },
            { user_name: 'user5', password: 'password5' }
        ];

        // Hash passwords before inserting
        const usersWithHashedPasswords = await Promise.all(
            userData.map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                return { ...user, password: hashedPassword };
            })
        );

        // Insert users into the database
        await User.bulkCreate(usersWithHashedPasswords);

        console.log('User seed data created successfully.');
    } catch (error) {
        console.error('Error seeding users:', error);
    }
};

 module.exports = seedUsers;
