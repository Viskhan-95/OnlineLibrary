const Genre = require("../modеls/Genre.model");

module.exports.genresController = {
    getGenres: (req, res) => {
        Genre.find()
        .then((data) => {
            res.json(data)
        })
    },
    getGenreById: (req, res) => {
        Genre.findById(req.params.id)
        .then((data) => {
            res.json(data)
        })
    },
    addGenre: (req, res) => {
        Genre.create({
            name: req.body.name,
        }).then(() => {
            res.json("Жанр добавлен")
        })
    },
    delGenre: (req, res) => {
        Genre.findByIdAndRemove(req.params.id)
        .then(() => {
            res.json("Жанр удален")
        }).catch(() => {
            res.json("Нельзя удалить привязанный к книгам жанр")
        })
    },
    updateGenre: (req, res) => {
        Genre.findByIdAndUpdate(req.params.id, {
            $set: {
                name: req.body.name,
            }
        }).then(() => {
            res.json("Изменения в жанр внесены");
        })
    }
}