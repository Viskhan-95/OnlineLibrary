const { Router } = require("express");
const { genresController } = require("../controllers/genres.controller");

const route = Router();

route.get('/user/genres', genresController.getGenres);
route.get('/user/genre/:id', genresController.getGenreById);

route.get('/admin/genres', genresController.getGenres);
route.get('/admin/genre/:id', genresController.getGenreById);
route.post('/admin/genre/add', genresController.addGenre);
route.delete('/admin/genre/delete/:id', genresController.delGenre);
route.patch('/admin/genre/update/:id', genresController.updateGenre);

module.exports = route;