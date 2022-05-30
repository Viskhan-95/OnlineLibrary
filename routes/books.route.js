const { Router } = require("express");
const { booksController } = require("../controllers/books.controller");

const route = Router();

route.get('/user/books', booksController.getBooks);
route.get('/user/book/:id', booksController.getBookById);
route.get('/user/book/genre/:id', booksController.getBookByGenre);

route.get('/admin/books', booksController.getBooks);
route.get('/admin/book/:id', booksController.getBookById);
route.get('/admin/book/genre/:id', booksController.getBookByGenre);
route.post('/admin/book/add/:id', booksController.addBook);
route.delete('/admin/book/delete/:id', booksController.delBook);
route.patch('/admin/book/update/:id', booksController.updateBook);

module.exports = route;