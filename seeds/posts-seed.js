const { Post } = require('../models');

const seedPosts = async () => {
    try {
        // Create posts data
        const postData = [
            { 
                title: 'First Post', 
                post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
                word_count: 20, 
                comment_count: 5, 
                category: 'Mental Health', 
                user_id: 1 
            },
            { 
                title: 'Second Post', 
                post_text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
                word_count: 30, 
                comment_count: 10, 
                category: 'Inspiration', 
                user_id: 2 
            },
            // Add more posts as needed
        ];

        // Insert posts into the database
        await Post.bulkCreate(postData);

        console.log('Post seed data created successfully.');
    } catch (error) {
        console.error('Error seeding posts:', error);
    }
};

module.exports = seedPosts
