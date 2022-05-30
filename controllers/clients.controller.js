const Book = require("../modеls/Book.model")
const User = require("../modеls/User.model")

module.exports.clientsController = {

    updateUser: async (req, res) => {

        const user = await User.findById(req.params.id)
        const book = await Book.findById(req.body.books)

        if (!user.isBlocked) {
            if (user.books.length < 4) {
                if (book.userId === null) {
                    await User.findByIdAndUpdate(req.params.id, {
                        $push: {books: req.body.books }
                    })
                    await Book.findByIdAndUpdate(req.body.books, {
                        userId: req.params.id 
                    })

                    res.json('Усепх')

                } else {
                    res.json('Книга арендована')
                }
            } else {
                res.json('У пользователя больше 3х книг')
            }

        } else {
            res.json('Пользовватель заблокирован')
        }
    },

    updateAdmin: async(req, res) => {
        const user = await User.findById(req.params.id)

            await Book.findByIdAndUpdate(req.body.books, {
                userId: null
            })
        await User.findByIdAndUpdate(req.params.id, {
            isBlocked : true
        })
        .then(() => {
            res.json("Пользователь заблокирован")
        })
    }
}