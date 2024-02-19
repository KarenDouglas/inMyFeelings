const { Comment } = require('../models');

const seedComments = async () => {
    try {
        // Create comments data
        const commentData = [
            { 
                comment_text: 'Great post!', 
                user_id: 1, 
                post_id: 1 
            },
            { 
                comment_text: 'Interesting thoughts.', 
                user_id: 2, 
                post_id: 1 
            },
            // Add more comments as needed
        ];

        // Insert comments into the database
        await Comment.bulkCreate(commentData);

        console.log('Comment seed data created successfully.');
    } catch (error) {
        console.error('Error seeding comments:', error);
    }
};

module.exports = seedComments
