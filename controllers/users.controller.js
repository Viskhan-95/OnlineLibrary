const User = require("../modеls/User.model")

module.exports.usersController = {
    getUsers: (req, res) => {
        User.find()
            .then((data) => {
                res.json(data)
            })
    },
    getUserById: (req, res) => {
        User.find(req.params.id)
            .then((data) => {
                res.json(data)
            })
    },
    addUser: (req, res) => {
        User.create({
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            nikName: req.body.nikName
        }).then(() => {
            res.json("Пользователь добавлен")
        })
    },
    delUser: (req, res) => {
        User.findByIdAndRemove(req.params.id)
            .then(() => {
                res.json("Пользователь удален")
            }).catch(() => {
                res.json("Нельзя удалить пользователя, без возврата книг")
            })
    },
}