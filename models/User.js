const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt')

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
       
    },
    {
        sequelize,
        modelName: 'User',
    }
)
User.beforeCreate(async function(user) {
    const hashedPassWord = await bcrypt.hash(user.password,10);
    user.password = hashedPassWord
})

User.prototype.verifyPassword = async function (password){
    return await bcrypt.compare(password, this.password)
}

module.exports = User