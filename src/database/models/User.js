const Mongoose = require("mongoose"),
    Schema = Mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
}, { timestamps: true });

const user = Mongoose.model('user', UserSchema);

module.exports = user;

