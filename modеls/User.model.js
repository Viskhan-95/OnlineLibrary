const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    nikName: String,
    isBlocked: {
        type: Boolean,
        default: false
    },
    books: [
        {
            ref: "Book",
            type: mongoose.SchemaTypes.ObjectId
        }
    ]
})

const User = mongoose.model('User', userSchema);

module.exports = User;