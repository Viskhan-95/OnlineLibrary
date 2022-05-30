const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");

const route = Router();

route.post('/user/add', usersController.addUser);
route.delete('/user/delete/:id', usersController.delUser);

route.get('/admin', usersController.getUsers);
route.get('/admin/:id', usersController.getUserById);

module.exports = route;