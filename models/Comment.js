const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Comment extends Model{}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
                onDelete: 'CASCADE'
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'posts',
                key: 'id',
                onDelete: 'CASCADE'
            },
        },
    },
    {
        sequelize,
        underscored: true,
        modelName: 'comment',
    }
)

module.exports = Comment