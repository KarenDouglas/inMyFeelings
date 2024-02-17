const {Model, DataTypes} = require('sequelize');

class User extends Model{}

User.init(
    {
        id: {
         type:DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
        },
        user_name: {
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        entry_count: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        allowNull: false,

    },{
        sequelize,
        modelName: 'User'
    }
)

module.exports = User