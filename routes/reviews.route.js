const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");

const route = Router();

route.post('/user/review/add/:id', reviewsController.addReview);

route.get('/admin/review/:id', reviewsController.getReview);
route.delete('/admin/review/delete/:id', reviewsController.delReview);

module.exports = route;