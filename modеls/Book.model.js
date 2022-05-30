const { default: mongoose } = require("mongoose");

const bookSchema = mongoose.Schema({
    userId: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId,
        default: null
    },
    genreId: {
        ref: "Genre",
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    name: String
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;