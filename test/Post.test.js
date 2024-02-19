const {Post, Comment} = require('../models')

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
   
    describe('PUT ROUTE', () => {
        test('it should update post info', async () =>  {
            
                await Post.update(
                    {
                        title: 'here is the new title',
                        post_text: "updated post",
                        word_count: 30,
                        comment_count: 20,
                        user_id: 1,
                    },
                    {
                        where: {
                            id: 1
                        }
                    }
                )
                const post = await Post.findByPk(1)

                expect(post).toBeDefined()
            })

        })
   })
  

describe('it should create a new comment', () => {
    test('create new comment', async() => {
        const comment = await Comment.findAll()
        expect(comment).toBeDefined()
    })
})