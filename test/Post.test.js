const {Post, Comment, Category} = require('../models')

describe('Post model tests', () => {
    describe('GET ROUTES', () => {
        test('it should retrieve all entries ', async() => {
            const posts = await Post.findAll()
            expect(Array.isArray(posts)).toBe(true)
        })
    })
    describe('GET BY ID', () => {
        test('should retrive post by id', async() => {
            const post = await Post.findByPk(1)
            expect(post).toBeDefined()

        })
    })
   
    
  

describe('it should get a new comment', () => {
    test('create new comment', async() => {
        const comment = await Comment.findAll()
        expect(comment).toBeDefined()
    })
    })
})
