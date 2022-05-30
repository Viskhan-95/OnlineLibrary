const Book = require("../modеls/Book.model");

module.exports.booksController = {
    getBooks: (req, res) => {
        Book.find()
        .then((data) => {
            res.json(data)
        })
    },
    getBookById: (req, res) => {
        Book.find(req.params.id)
        .then((data) => {
            res.json(data)
        })
    },
    getBookByGenre: (req, res) => {
        Book.find({genreId: req.params.id})
        .then((data) => {
            res.json(data)
        })
    },
    addBook: (req, res) => {
        Book.create({
            name: req.body.name,
            genreId: req.params.id
        }) .then(() => {
            res.json("Книга успешно добавлена")
        })
    },
    delBook: (req, res) => {
        Book.findByIdAndRemove(req.params.id)
        .then(() => {
            res.json("Книга удалена")
        })
    },
    updateBook: (req, res) => {
        Book.findByIdAndUpdate(req.params.id, {$set: {
            name: req.body.name,
            genreId: req.body.genreId,
        }})
        .then(() => {
            res.json("Данные о книге изменены")
        })
    },
}