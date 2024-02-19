const User = require('./User')
const Post = require('./Post')
// User has many entries (one-to-many relationship between User and Entries, where User.id is the foreign key in Entries)
// Entry belongs to User (one-to-many relationship between Entries and User, where Entries.user_id references User.id)
// Entry has one Category (one-to-one relationship between Entries and Category, where Entries.category_id references Category.id)
// Category has many entries (one-to-many relationship between Category and Entries, where Category.id is the foreign key in Entries)
// Entry has many comments (one-to-many relationship between Entries and Comments, where Entries.id is the foreign key in Comments)
// Comment belongs to Entry (one-to-many relationship between Comments and Entries, where Comments.entry_id references Entries.id)
// Comment belongs to User (one-to-many relationship between Comments and User, where Comments.user_id references User.id)
//user has many post
User.hasMany(Post, {foreignKey: 'user_id' })
//post belongs to user
Post.belongsTo(User, {foreignKey: 'user_id'})
module.exports = { User, Post }