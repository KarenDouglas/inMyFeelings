const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Post extends Model{}
//Post Model
// id
//title
//Post_text
// word_count
//comment_count
//date created
//date updated
//foreign key user_id
//foriegn key category_id

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        word_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        comment_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        category: {
            type: DataTypes.ENUM('Mental Health', 'Inspiration', 'StotyTime', 'Rants', 'Thoughts', 'Spiritual','Humor', 'Shout Outs', 'Random'), 
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        underscored: true,
        modelName: 'post',
    }
)

module.exports = Post