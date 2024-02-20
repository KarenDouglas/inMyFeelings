const User = require('./User')
const Post = require('./Post')
const Comment = require('./Comment')




// Entry has many comments (one-to-many relationship between Entries and Comments, where Entries.id is the foreign key in Comments)
// Comment belongs to Entry (one-to-many relationship between Comments and Entries, where Comments.entry_id references Entries.id)
Comment.belongsTo(Post,{foreignKey: 'post_id', onDelete: 'CASCADE'})
Post.hasMany(Comment, {foreignKey: 'post_id', onDelete: 'CASCADE'})
// Comment belongs to User (one-to-many relationship between Comments and User, where Comments.user_id references User.id)
Comment.belongsTo(User, {foreignKey: 'user_id'})
User.hasMany(Comment, {foreignKey: 'user_id'})

//user has many post
User.hasMany(Post, {foreignKey: 'user_id' })
//post belongs to user
Post.belongsTo(User, {foreignKey: 'user_id'})
module.exports = { User, Post, Comment }