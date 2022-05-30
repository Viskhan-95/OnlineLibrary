const { Router } = require("express");
const { clientsController } = require("../controllers/clients.controller");

const route = Router();

route.patch('/user/get/book/:id', clientsController.updateUser);
route.patch('/admin/withdraw/books/:id', clientsController.updateAdmin);

module.exports = route;