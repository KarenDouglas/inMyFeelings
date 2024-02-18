const {Post} = require('../models')

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
   describe('Post ROUTE', () => {
    test('it should post to db', async () => {
        await Post.create(
            {
                title: "here is the title",
                post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                word_count: 100,
                comment_count: 20,
                user_id: 1,                
            }
        )
        const post = await Post.findByPk(1)

        expect(post).toBeDefined()
        expect(post.title).toBeDefined()
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
  

})