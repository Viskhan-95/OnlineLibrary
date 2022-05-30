const { Router } = require("express");

const route = Router();

route.use(require("./users.route"));
route.use(require("./books.route"));
route.use(require("./genres.route"));
route.use(require("./reviews.route"));
route.use(require("./clients.route"))

module.exports = route;