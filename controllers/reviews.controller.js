const Review = require("../modеls/Review.model");

module.exports.reviewsController = {
    getReview: (req, res) => {
        Review.find({bookId: req.params.id}).populate("bookId", "name")
        .then((data) => {
            res.json(data)
        })
    },
    addReview: (req, res) => {
        Review.create({
            bookId: req.params.bookId,
            text: req.body.text,
        }).then(() => {
            res.json("Отзыв добавлен")
        })
    },
    delReview: (req, res) => {
        Review.findByIdAndRemove(req.params.id)
        .then(() => {
            res.json("Отзыв удален")
        })
    }
}